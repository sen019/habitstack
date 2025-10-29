import { useState, useEffect, useCallback } from 'react';
import Navbar from './Navbar';
import WeekBar from './WeekBar';
import HabitCard from './HabitCard';
import CreateHabitModal from './CreateHabitModal';
import RenameHabitModal from './RenameHabitModal';
import DeleteHabitModal from './DeleteHabitModal';
import ResetHabitModal from './ResetHabitModal';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import svgPaths from '../imports/svg-khjfn58tr1';

interface Habit {
  id: string;
  name: string;
  createdAt: string;
  streak: number;
  statuses: Record<string, string>;
}

interface DashboardProps {
  accessToken: string;
  onLogout: () => void;
}

export default function Dashboard({ accessToken, onLogout }: DashboardProps) {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [selectedDate, setSelectedDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState<Habit | null>(null);
  const [loading, setLoading] = useState(true);

  const apiUrl = `https://${projectId}.supabase.co/functions/v1/make-server-f7609152`;

  const fetchHabits = useCallback(async () => {
    try {
      console.log('Dashboard - Fetching habits with token:', accessToken.substring(0, 20) + '...');
      const response = await fetch(`${apiUrl}/habits`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Dashboard - Fetched habits:', data.habits);
        // Log streak info for debugging
        data.habits?.forEach((habit: any) => {
          console.log(`Habit "${habit.name}": streak=${habit.streak}, statuses=`, habit.statuses);
        });
        setHabits(data.habits || []);
      } else {
        const errorText = await response.text();
        console.log('Dashboard - Error fetching habits:', response.status, errorText);
        try {
          const errorData = JSON.parse(errorText);
          console.log('Dashboard - Error details:', errorData);
          if (errorData.details) {
            console.log('Dashboard - Server error details:', errorData.details);
          }
        } catch {
          console.log('Dashboard - Could not parse error as JSON');
        }
      }
    } catch (error) {
      console.log('Dashboard - Error fetching habits:', error);
    } finally {
      setLoading(false);
    }
  }, [accessToken, apiUrl]);

  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  const handleCreateHabit = async (name: string) => {
    try {
      console.log('Dashboard - Creating habit:', name, 'with token:', accessToken.substring(0, 20) + '...');
      const response = await fetch(`${apiUrl}/habits`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Dashboard - Habit created:', data.habit);
        setHabits([...habits, data.habit]);
        setCreateModalOpen(false);
      } else {
        console.log('Dashboard - Error creating habit:', response.status, await response.text());
        alert('Failed to create habit');
      }
    } catch (error) {
      console.log('Dashboard - Error creating habit:', error);
      alert('Failed to create habit');
    }
  };

  const handleRenameHabit = async (habitId: string, name: string) => {
    try {
      const response = await fetch(`${apiUrl}/habits/${habitId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (response.ok) {
        setHabits(habits.map(h => h.id === habitId ? { ...h, name } : h));
        setRenameModalOpen(false);
        setSelectedHabit(null);
      } else {
        console.log('Error renaming habit:', await response.text());
        alert('Failed to rename habit');
      }
    } catch (error) {
      console.log('Error renaming habit:', error);
      alert('Failed to rename habit');
    }
  };

  const handleDeleteHabit = async (habitId: string) => {
    try {
      const response = await fetch(`${apiUrl}/habits/${habitId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        setHabits(habits.filter(h => h.id !== habitId));
        setDeleteModalOpen(false);
        setSelectedHabit(null);
      } else {
        console.log('Error deleting habit:', await response.text());
        alert('Failed to delete habit');
      }
    } catch (error) {
      console.log('Error deleting habit:', error);
      alert('Failed to delete habit');
    }
  };

  const handleResetHabit = async (habitId: string) => {
    try {
      const response = await fetch(`${apiUrl}/habits/${habitId}/reset`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        // Update local state
        setHabits(habits.map(h => 
          h.id === habitId 
            ? { ...h, streak: 0, statuses: {} }
            : h
        ));
        setResetModalOpen(false);
        setSelectedHabit(null);
      } else {
        console.log('Error resetting habit:', await response.text());
        alert('Failed to reset habit');
      }
    } catch (error) {
      console.log('Error resetting habit:', error);
      alert('Failed to reset habit');
    }
  };

  const handleStatusChange = async (habitId: string, date: string, status: 'done' | 'skip') => {
    try {
      console.log(`Dashboard - Updating habit ${habitId} status: date=${date}, status=${status}`);
      const response = await fetch(`${apiUrl}/habits/${habitId}/status`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, status }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(`Dashboard - Status update response: streak=${data.streak}`, data);
        // Update local state
        setHabits(habits.map(h => 
          h.id === habitId 
            ? { 
                ...h, 
                streak: data.streak, 
                statuses: { ...h.statuses, [date]: status } 
              }
            : h
        ));
      } else {
        console.log('Error updating habit status:', await response.text());
        alert('Failed to update habit status');
      }
    } catch (error) {
      console.log('Error updating habit status:', error);
      alert('Failed to update habit status');
    }
  };

  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="habit-dashboard">
      <Navbar 
        selectedDate={selectedDate}
        onAddHabit={() => setCreateModalOpen(true)} 
        onLogout={onLogout}
      />
      
      <WeekBar 
        selectedDate={selectedDate} 
        onDateChange={setSelectedDate}
      />
      
      {/* Habit Listing */}
      <div className="basis-0 bg-background grow min-h-px min-w-px relative shrink-0 w-full z-[1]" data-name="habit-listing">
        <div className="overflow-auto rounded-[inherit] size-full">
          {loading ? (
            <div className="flex items-center justify-center size-full p-[40px]">
              <p className="text-muted-foreground">Loading habits...</p>
            </div>
          ) : habits.length === 0 ? (
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[24px] py-[40px] relative size-full">
              <div className="basis-0 bg-secondary grow min-h-px min-w-px relative rounded-[var(--radius-button)] shrink-0 w-full" data-name="info-menu">
                <div className="flex flex-col items-center justify-center size-full">
                  <div className="box-border content-stretch flex flex-col gap-[20px] items-center justify-center p-[8px] relative size-full">
                    <h3 className="relative shrink-0 text-foreground text-nowrap whitespace-pre">Start tracking your habits</h3>
                    <button
                      onClick={() => setCreateModalOpen(true)}
                      className="bg-gray-900 box-border content-stretch flex gap-[8px] h-[50px] items-center overflow-clip px-[24px] py-[12px] relative rounded-[var(--radius-button)] shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
                      data-name="buttons"
                    >
                      <div className="relative shrink-0 size-[26px]" data-name="icons">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
                          <g id="icons">
                            <path d={svgPaths.p6d58a70} fill="var(--fill-0, #F9FAFB)" id="vector" />
                          </g>
                        </svg>
                      </div>
                      <span className="font-['Geist',_sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[18px] text-gray-50 text-nowrap whitespace-pre">Create Habit</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="box-border content-start flex flex-wrap gap-[20px] items-start p-[24px] relative w-full">
              {habits.map((habit) => (
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  selectedDate={selectedDate}
                  onStatusChange={handleStatusChange}
                  onRename={(h) => {
                    setSelectedHabit(h);
                    setRenameModalOpen(true);
                  }}
                  onDelete={(h) => {
                    setSelectedHabit(h);
                    setDeleteModalOpen(true);
                  }}
                  onReset={(h) => {
                    setSelectedHabit(h);
                    setResetModalOpen(true);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <CreateHabitModal
        isOpen={createModalOpen}
        onClose={() => setCreateModalOpen(false)}
        onCreate={handleCreateHabit}
      />

      <RenameHabitModal
        isOpen={renameModalOpen}
        habit={selectedHabit}
        onClose={() => {
          setRenameModalOpen(false);
          setSelectedHabit(null);
        }}
        onRename={handleRenameHabit}
      />

      <DeleteHabitModal
        isOpen={deleteModalOpen}
        habit={selectedHabit}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedHabit(null);
        }}
        onDelete={handleDeleteHabit}
      />

      <ResetHabitModal
        isOpen={resetModalOpen && selectedHabit !== null}
        habitName={selectedHabit?.name || ''}
        onClose={() => {
          setResetModalOpen(false);
          setSelectedHabit(null);
        }}
        onConfirm={() => {
          if (selectedHabit) {
            handleResetHabit(selectedHabit.id);
          }
        }}
      />
    </div>
  );
}
