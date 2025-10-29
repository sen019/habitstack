## 0) Design & Technology Requirements

- **Design system:** Use **only** the shared **Figma Library** for all **colors, fonts, components, icons, spacing, and effects**.  
  - Do not invent new tokens or styles. Reuse existing components; when a new UI is required (e.g., habit card), compose it from library primitives.
- **Backend:** Use **Supabase** for:
  - **Google Authentication** (sign in / sign out).
  - **Data storage** of all **habits** and **habit‑related information** (names, created date, daily done/skip states, streak count, etc.).
- **Platform target:** Web application (responsive). Desktop first is acceptable; ensure mobile readability.

---

## 1) App Structure (Top‑Level)

- **Login Page** → **Habit Dashboard** (post‑auth).  
- **Global Nav (Dashboard):** Top navbar with logo (left) and two buttons (right): **Create New Habit** and **Log out**.
- **State management:** Keep UI state in sync with Supabase. UI should reflect latest data after any create/rename/reset/delete/mark‑done/mark‑skip action.

---

## 2) Authentication — Google via Supabase

**Flow (exact):**
1. **Login with Google**: On the login page, a single action signs the user into their Google account.  
2. On success, authenticate the user in Habitstack and route to the **Habit Dashboard**.  
3. **Log out**: From the navbar, clicking **Log out** signs the user out and returns to the **Login Page**.

**UI requirements:**
- Simple, single‑step Google login button.
- Show minimal loading/feedback during auth.

---

## 3) Habit Dashboard (Layout & Behavior)

**Dashboard has 3 sections:**

1) **Top Navbar**
   - Left: **App logo**.
   - Right: **Create New Habit** button and **Log out** button.

2) **Current Week Menu Bar**
   - A **horizontal bar** showing the **current week** as **7 columns**, each column is a **date**.
   - **Previous Week** and **Upcoming Week** buttons on either side.
   - **Default selection:** **Current date** is selected by default.
   - **Interaction:** Clicking any date shows the **habits for that date** in the Habit Listing section.

3) **Habit Listing Section**
   - **Empty state:** By default, empty (until the user creates habits).
   - When habits exist, show **habit cards** arranged **2 cards per row**.

---

## 4) Habit Card — Design & Interactions

Each **Habit Card** has **two sections**:

### 4.1 Card Header
Include the following (left to right or suitable layout as per library patterns):
- **Habit streak count**: The number of **consecutive days** the habit was completed **without missing a day**.
- **Habit name**.
- **Skip** button: Marks the habit as **skipped for the day**.
- **Done** button: Marks the habit as **completed for the day**.
- **3‑dot menu**: Opens options — **Reset habit**, **Rename habit**, **Delete habit**.

### 4.2 Habit Streak Graph
- A **grid view** for the **current month**:
  - Show **30 or 31** squares (use **28** for **February**), **one square per day** of the current month.
- **Color rules (exact):**
  - **Green** square = day **completed** (Done).
  - **Red** square = day **skipped** (Skip).  
  - A **row of consecutive green** squares indicates a **streak**.
  - The **streak count** is shown in the **card header** (beside the habit name).
  - **Red boxes** also **highlight missed days** (keep red as the visual cue for non‑completed days).

> Implementation note for the model: Ensure the grid always matches the day count of the **current calendar month** and updates color states based on the user’s actions for each day.

---

## 5) Create Habit — Modal Flow

**Trigger:** Clicking **Create New Habit** in the **navbar** opens the **Add new habit** modal.

**Modal structure:**
1. **Modal Header**: Title **“Add new habit”** and an **X (close)** button.
2. **Creation Form**:
   - Single input field with placeholder **“Enter habit name”**.
3. **Primary Action Button**: **“Let’s do it”**
   - **Disabled** when the input is **empty**.
   - On submit, **create the habit** and **render its habit card** in the **Habit Listing** section.

---

## 6) Reset Habit — Modal Flow

**Trigger:** From the **3‑dot menu** on a habit card, choose **Reset habit**.

**Modal structure:**
1. **Modal Header**: Title **“Reset this habit”** and an **X (close)** button.
2. **Description copy**: “**Would you like to reset this habit and start over again?**”
3. **Primary Action Button**: **“Reset Habit it”** (label **must match** this exact text)
   - On submit, **reset** the habit:
     - **Clear all progress** for this habit (**completed days**, **skipped days**, and **streak count**).

---

## 7) Rename Habit — Modal Flow

**Trigger:** From the **3‑dot menu** on a habit card, choose **Rename habit**.

**Modal structure:**
1. **Modal Header**: Title **“Rename this habit”** and an **X (close)** button.
2. **Rename Form**:
   - Single input **pre‑filled** with the **existing habit name**.
3. **Primary Action Button**: **“Rename Habit”**
   - **Disabled** if the user **did not modify** the existing name.
   - On submit, update the **habit name** in the **habit card**.

---

## 8) Delete Habit — Modal Flow

**Trigger:** From the **3‑dot menu** on a habit card, choose **Delete habit**.

**Modal structure:**
1. **Modal Header**: Title **“Delete this habit”** and an **X (close)** button.
2. **Description copy** (choose **one** based on the habit’s history since creation):
   - If **completed days > skipped days**:  
     “**You did this habit for X days. Are you sure you want to lose the progress and delete this habit?**”  
     - Replace **X** with the **number of days completed**.
   - If **skipped days > completed days**:  
     “**You failed to do it. Better delete it before anyone sees!**”
3. **Primary Action Button**: **“Delete Habit”**
   - On submit, **delete** the habit and **remove** it from the **Habit Listing**.
4. **Warning text** (below button):  
   “**This action is irreversible and this habit will be permanently deleted**”.

---

## 9) Data & Persistence (Supabase Responsibilities)

- **Authentication**: Handle **Google sign‑in/sign‑out**.
- **Storage**: Persist all habit data: habit **name**, **created date**, **per‑day status** for the current month (done/skip/unset), and computed **streak count**.
- **Consistency**: After any action (create/rename/reset/delete/done/skip), **refresh** the UI state to reflect the server state.
- **Security**: Scope data to the **authenticated user** only.

> Keep this section high‑level; implementation details (schemas, SQL) are out of scope for this guideline and should be inferred by the build system from UI/state requirements.

---

## 10) Copy & UI Labels (Must Match Exactly)

- **Create Habit Modal**
  - Title: “**Add new habit**”
  - Placeholder: “**Enter habit name**”
  - Button: “**Let’s do it**”
- **Reset Habit Modal**
  - Title: “**Reset this habit**”
  - Description: “**Would you like to reset this habit and start over again?**”
  - Button: “**Reset Habit it**”
- **Rename Habit Modal**
  - Title: “**Rename this habit**”
  - Button: “**Rename Habit**”
- **Delete Habit Modal**
  - Title: “**Delete this habit**”
  - Description A (when completed > skipped): “**You did this habit for X days. Are you sure you want to lose the progress and delete this habit?**”
  - Description B (when skipped > completed): “**You failed to do it. Better delete it before anyone sees!**”
  - Button: “**Delete Habit**”
  - Warning: “**This action is irreversible and this habit will be permanently deleted**”
- **Navbar (Dashboard):** “**Create New Habit**”, “**Log out**”
- **Buttons on Week Bar:** “**Previous Week**”, “**Upcoming Week**”

---

## 11) Visual & Interaction Notes

- **Cards per row:** Display **2 habit cards per row** on standard desktop widths. On smaller screens, stack as needed per library responsive rules.
- **Week selection:** Selecting a date filters the listing to **that date’s** habit states.
- **Streaks:** A **consecutive row of green** squares indicates an **active streak**; **streak count** is shown in the **header**.
- **Colors:** Use the **Figma Library** tokens only. Map **done** to the library’s **success** color (green), **skip/missed** to the library’s **error** color (red).
- **Feedback:** Show lightweight loading/confirmation where appropriate (e.g., after submit).

---

## 12) Acceptance Checklist (for the AI builder)

- [ ] Uses **shared Figma Library** for all styles/components.  
- [ ] Supabase **Google Auth** works; **Log out** returns to the Login Page.  
- [ ] **Week bar** shows **7 dates**, with **Previous/Upcoming** controls; **current date** selected by default.  
- [ ] Clicking a **date** updates the **Habit Listing** for that date.  
- [ ] **Create New Habit** opens **Add new habit** modal; **Let’s do it** disabled when input empty; on submit, card appears.  
- [ ] **Habit cards** render **2 per row**.  
- [ ] Card header shows **streak count**, **habit name**, **Skip**, **Done**, and **3‑dot menu**.  
- [ ] Streak graph shows **current month** day boxes (**30/31**, **28 for February**); **Green** = done; **Red** = skipped/missed; **row of green** = streak.  
- [ ] **Reset habit** modal resets **completed**, **skipped**, and **streak count** on confirm (**Reset Habit it**).  
- [ ] **Rename habit** modal pre‑fills name; **Rename Habit** disabled unless changed; updates card on submit.  
- [ ] **Delete habit** modal shows the correct description (based on completed vs skipped), button **Delete Habit**, and warning text; deleting removes the habit.  
- [ ] **All state changes** persist to **Supabase** and refresh correctly in the UI.

---

### Final Notes for Figma Make
- Keep the language and component names as written to help parsing.  
- Follow the **shared Figma Library** strictly.  
- Use **Supabase** for **Google Authentication** and for **storing all habits and related information**.
