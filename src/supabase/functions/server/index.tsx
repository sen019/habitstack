import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'jsr:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx';

const app = new Hono();

// Configure CORS for open access
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.use('*', logger(console.log));

// Create Supabase client
const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Middleware to verify user authentication
async function verifyUser(authHeader: string | null) {
  if (!authHeader) {
    return null;
  }
  
  const accessToken = authHeader.split(' ')[1];
  if (!accessToken) {
    return null;
  }

  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  
  if (error || !user) {
    console.log('Authorization error while verifying user:', error);
    return null;
  }
  
  return user.id;
}

// Helper function to get status entries with both keys and values
async function getStatusEntriesWithKeys(prefix: string): Promise<Array<{ key: string; value: string }>> {
  const { data, error } = await supabase
    .from("kv_store_f7609152")
    .select("key, value")
    .like("key", prefix + "%");
  
  if (error) {
    console.log('Error fetching status entries:', error);
    return [];
  }
  
  // The value column is JSONB, so we need to extract the actual string value
  return data?.map((d) => ({ key: d.key, value: d.value as string })) ?? [];
}

// Helper function to calculate streak for a habit
function calculateStreak(statusEntries: Array<{ key: string; value: string }>, today: string): number {
  console.log('=== calculateStreak START ===');
  console.log('Today:', today);
  console.log('Status entries count:', statusEntries?.length || 0);
  
  // Defensive: handle null/undefined/non-array inputs
  if (!Array.isArray(statusEntries) || statusEntries.length === 0) {
    console.log('No status entries, returning 0');
    return 0;
  }
  
  // Get all dates marked as "done" into a Set for fast lookup
  const doneDates = new Set(
    statusEntries
      .filter(entry => entry && entry.value === 'done')
      .map(entry => {
        if (!entry || !entry.key || typeof entry.key !== 'string') {
          return '';
        }
        const match = entry.key.match(/user:[^:]+:habit:[^:]+:status:(.+)/);
        return match ? match[1] : '';
      })
      .filter(date => date)
  );
  
  console.log('Done dates:', Array.from(doneDates));
  
  if (doneDates.size === 0) {
    console.log('No done dates, returning 0');
    return 0;
  }
  
  let streak = 0;
  
  // Work with date strings directly to avoid timezone issues
  let checkDateStr = today;
  console.log('Starting check from:', checkDateStr);
  console.log('Is today done?', doneDates.has(checkDateStr));
  
  if (doneDates.has(checkDateStr)) {
    // Today is done, start counting from today
    streak = 1;
    console.log('Today is done, streak = 1');
    
    // Count backwards for consecutive days
    while (true) {
      // Subtract one day using date arithmetic
      const [year, month, day] = checkDateStr.split('-').map(Number);
      const date = new Date(year, month - 1, day - 1); // month is 0-indexed, subtract 1 day
      checkDateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
      
      console.log('Checking date:', checkDateStr, 'Is done?', doneDates.has(checkDateStr));
      if (doneDates.has(checkDateStr)) {
        streak++;
        console.log('Consecutive day found, streak =', streak);
      } else {
        console.log('Streak broken at', checkDateStr);
        break;
      }
    }
  } else {
    // If today is not done, check yesterday (grace period of 1 day)
    const [year, month, day] = checkDateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day - 1);
    checkDateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    
    console.log('Today not done, checking yesterday:', checkDateStr, 'Is done?', doneDates.has(checkDateStr));
    
    if (doneDates.has(checkDateStr)) {
      streak = 1;
      console.log('Yesterday is done, streak = 1');
      
      // Count backwards for consecutive days
      while (true) {
        const [y, m, d] = checkDateStr.split('-').map(Number);
        const dt = new Date(y, m - 1, d - 1);
        checkDateStr = `${dt.getFullYear()}-${String(dt.getMonth() + 1).padStart(2, '0')}-${String(dt.getDate()).padStart(2, '0')}`;
        
        console.log('Checking date:', checkDateStr, 'Is done?', doneDates.has(checkDateStr));
        if (doneDates.has(checkDateStr)) {
          streak++;
          console.log('Consecutive day found, streak =', streak);
        } else {
          console.log('Streak broken at', checkDateStr);
          break;
        }
      }
    } else {
      console.log('No active streak');
    }
  }
  
  console.log('=== calculateStreak END - Final streak:', streak, '===');
  return streak;
}

// GET all habits for a user
app.get('/make-server-f7609152/habits', async (c) => {
  try {
    const userId = await verifyUser(c.req.header('Authorization'));
    if (!userId) {
      console.log('GET /habits - No user ID (unauthorized)');
      return c.json({ error: 'Unauthorized' }, 401);
    }

    console.log(`GET /habits - User ID: ${userId}`);
    const habitsData = await kv.get(`user:${userId}:habits`);
    console.log(`GET /habits - Raw habits data:`, habitsData);
    const habits = habitsData ? JSON.parse(habitsData) : [];
    console.log(`GET /habits - Parsed habits count: ${habits.length}`);
    
    // Get status for all habits
    const habitsWithStatus = await Promise.all(
      habits.map(async (habit: any) => {
        const statusEntries = await getStatusEntriesWithKeys(`user:${userId}:habit:${habit.id}:status:`);
        console.log(`GET /habits - Status entries for habit ${habit.id}:`, statusEntries);
        
        const today = new Date().toISOString().split('T')[0];
        const streak = calculateStreak(statusEntries || [], today);
        
        // Convert status entries to object with defensive coding
        const statuses: Record<string, string> = {};
        if (Array.isArray(statusEntries)) {
          statusEntries.forEach(entry => {
            // Defensive: ensure entry and entry.key exist
            if (entry && entry.key && typeof entry.key === 'string') {
              const match = entry.key.match(/user:[^:]+:habit:[^:]+:status:(.+)/);
              if (match && entry.value) {
                statuses[match[1]] = entry.value;
              }
            } else {
              console.log(`GET /habits - Invalid entry for habit ${habit.id}:`, entry);
            }
          });
        }
        
        return {
          ...habit,
          streak,
          statuses,
        };
      })
    );

    console.log(`GET /habits - Returning ${habitsWithStatus.length} habits`);
    return c.json({ habits: habitsWithStatus });
  } catch (error) {
    console.log('GET /habits - Critical error:', error);
    console.log('GET /habits - Error type:', typeof error);
    console.log('GET /habits - Error message:', error instanceof Error ? error.message : String(error));
    console.log('GET /habits - Error stack:', error instanceof Error ? error.stack : 'No stack');
    return c.json({ 
      error: 'Failed to fetch habits', 
      details: error instanceof Error ? error.message : String(error) 
    }, 500);
  }
});

// POST create new habit
app.post('/make-server-f7609152/habits', async (c) => {
  try {
    const userId = await verifyUser(c.req.header('Authorization'));
    if (!userId) {
      console.log('POST /habits - No user ID (unauthorized)');
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { name } = await c.req.json();
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return c.json({ error: 'Habit name is required' }, 400);
    }

    console.log(`POST /habits - User ID: ${userId}, Creating habit: ${name}`);
    const habitsData = await kv.get(`user:${userId}:habits`);
    const habits = habitsData ? JSON.parse(habitsData) : [];
    console.log(`POST /habits - Current habits count: ${habits.length}`);
    
    const newHabit = {
      id: crypto.randomUUID(),
      name: name.trim(),
      createdAt: new Date().toISOString(),
    };
    
    habits.push(newHabit);
    await kv.set(`user:${userId}:habits`, JSON.stringify(habits));
    console.log(`POST /habits - Habit created successfully. New count: ${habits.length}`);

    return c.json({ habit: { ...newHabit, streak: 0, statuses: {} } });
  } catch (error) {
    console.log('Error creating habit:', error);
    return c.json({ error: 'Failed to create habit' }, 500);
  }
});

// PUT update habit name
app.put('/make-server-f7609152/habits/:id', async (c) => {
  try {
    const userId = await verifyUser(c.req.header('Authorization'));
    if (!userId) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const habitId = c.req.param('id');
    const { name } = await c.req.json();
    
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return c.json({ error: 'Habit name is required' }, 400);
    }

    const habitsData = await kv.get(`user:${userId}:habits`);
    const habits = habitsData ? JSON.parse(habitsData) : [];
    
    const habitIndex = habits.findIndex((h: any) => h.id === habitId);
    if (habitIndex === -1) {
      return c.json({ error: 'Habit not found' }, 404);
    }
    
    habits[habitIndex].name = name.trim();
    await kv.set(`user:${userId}:habits`, JSON.stringify(habits));

    return c.json({ habit: habits[habitIndex] });
  } catch (error) {
    console.log('Error updating habit:', error);
    return c.json({ error: 'Failed to update habit' }, 500);
  }
});

// DELETE habit
app.delete('/make-server-f7609152/habits/:id', async (c) => {
  try {
    const userId = await verifyUser(c.req.header('Authorization'));
    if (!userId) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const habitId = c.req.param('id');

    const habitsData = await kv.get(`user:${userId}:habits`);
    const habits = habitsData ? JSON.parse(habitsData) : [];
    
    const filteredHabits = habits.filter((h: any) => h.id !== habitId);
    
    if (filteredHabits.length === habits.length) {
      return c.json({ error: 'Habit not found' }, 404);
    }
    
    await kv.set(`user:${userId}:habits`, JSON.stringify(filteredHabits));
    
    // Delete all status entries for this habit
    const statusEntries = await getStatusEntriesWithKeys(`user:${userId}:habit:${habitId}:status:`);
    if (Array.isArray(statusEntries) && statusEntries.length > 0) {
      const keysToDelete = statusEntries
        .filter(entry => entry && entry.key)
        .map(entry => entry.key);
      if (keysToDelete.length > 0) {
        await kv.mdel(...keysToDelete);
      }
    }

    return c.json({ success: true });
  } catch (error) {
    console.log('Error deleting habit:', error);
    return c.json({ error: 'Failed to delete habit' }, 500);
  }
});

// PUT reset habit
app.put('/make-server-f7609152/habits/:id/reset', async (c) => {
  try {
    const userId = await verifyUser(c.req.header('Authorization'));
    if (!userId) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const habitId = c.req.param('id');

    // Verify habit exists
    const habitsData = await kv.get(`user:${userId}:habits`);
    const habits = habitsData ? JSON.parse(habitsData) : [];
    const habitExists = habits.some((h: any) => h.id === habitId);
    
    if (!habitExists) {
      return c.json({ error: 'Habit not found' }, 404);
    }
    
    // Delete all status entries for this habit
    const statusEntries = await getStatusEntriesWithKeys(`user:${userId}:habit:${habitId}:status:`);
    if (Array.isArray(statusEntries) && statusEntries.length > 0) {
      const keysToDelete = statusEntries
        .filter(entry => entry && entry.key)
        .map(entry => entry.key);
      if (keysToDelete.length > 0) {
        await kv.mdel(...keysToDelete);
      }
    }

    return c.json({ success: true });
  } catch (error) {
    console.log('Error resetting habit:', error);
    return c.json({ error: 'Failed to reset habit' }, 500);
  }
});

// POST update habit status for a date
app.post('/make-server-f7609152/habits/:id/status', async (c) => {
  try {
    const userId = await verifyUser(c.req.header('Authorization'));
    if (!userId) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const habitId = c.req.param('id');
    const { date, status } = await c.req.json();
    
    console.log(`POST /habits/${habitId}/status - date: ${date}, status: ${status}`);
    
    if (!date || !['done', 'skip'].includes(status)) {
      return c.json({ error: 'Invalid date or status' }, 400);
    }

    // Verify habit exists
    const habitsData = await kv.get(`user:${userId}:habits`);
    const habits = habitsData ? JSON.parse(habitsData) : [];
    const habitExists = habits.some((h: any) => h.id === habitId);
    
    if (!habitExists) {
      return c.json({ error: 'Habit not found' }, 404);
    }
    
    const key = `user:${userId}:habit:${habitId}:status:${date}`;
    await kv.set(key, status);
    console.log(`Saved status: ${key} = ${status}`);
    
    // Recalculate streak
    const statusEntries = await getStatusEntriesWithKeys(`user:${userId}:habit:${habitId}:status:`);
    console.log(`Retrieved ${statusEntries?.length || 0} status entries for streak calculation`);
    const today = new Date().toISOString().split('T')[0];
    console.log(`Server today date: ${today}`);
    const streak = calculateStreak(statusEntries || [], today);
    console.log(`Calculated streak: ${streak}`);

    return c.json({ success: true, streak });
  } catch (error) {
    console.log('Error updating habit status:', error);
    return c.json({ error: 'Failed to update habit status' }, 500);
  }
});

Deno.serve(app.fetch);
