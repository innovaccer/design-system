---
name: Menu keyboard a11y WCAG 2.2
overview: Make Menu fully keyboard-accessible per WCAG 2.2 AA and WAI-ARIA Menu pattern — trigger opens on Enter/Space, items activate on Space, Tab closes and moves focus to next after trigger, optional Home/End. Reuses Select's Tab-escape fallback pattern.
todos:
  - id: trigger-enter-space
    content: Trigger Enter + Space to open in menu/trigger/utils.tsx
    status: pending
  - id: items-space-activate
    content: Items Space to activate in menu/utils.tsx
    status: pending
  - id: shared-helper
    content: Optional move getNextFocusableAfterTrigger to overlayHelper; update Select import
    status: pending
  - id: tab-escape
    content: handlePopoverKeyDown on list div in Menu.tsx, close + focus next/trigger
    status: pending
  - id: home-end
    content: Home/End in list in menu/utils.tsx
    status: pending
  - id: docs
    content: Update menu interactions.mdx (Space, Tab note, Home/End)
    status: pending
  - id: tests
    content: Tests for Space trigger/item and Tab-escape in menu __tests__
    status: pending
isProject: false
---

# Menu: Keyboard accessibility sub-plan (WCAG 2.2 AA)

**Parent plan:** [keyboard_a11y_high-level_plan_0d91dee3.plan.md](keyboard_a11y_high-level_plan_0d91dee3.plan.md) — Part D4 (Menu).

**Relevant:** [select_tab_escape_fallback_c1e89a76.plan.md](select_tab_escape_fallback_c1e89a76.plan.md) — Tab-escape fallback and focus management when focus is inside the popover but not in the trap's focusable list (e.g. items with `tabindex="-1"`). The same pattern applies to Menu.

---

## 1. Goal

Make Menu fully keyboard-accessible per WCAG 2.2 AA and WAI-ARIA Menu pattern:

- **Trigger:** Enter and Space open the menu (in addition to Arrow Down/Up).
- **Items:** Space activates the focused menu item (in addition to Enter).
- **Tab:** When Tab is pressed from a menu item, close the menu and move focus to the next (or previous with Shift+Tab) focusable element after the trigger in document order — same behavior as Select's Tab-escape fallback.
- **Home/End (optional):** Move focus to first/last menu item for consistency with Select and APG.

---

## 2. Current state vs target


| Area            | Current                                                                   | Target                                                       |
| --------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Trigger: open   | ArrowDown/ArrowUp only (no Enter/Space)                                   | Enter and Space also open (per APG menu button)              |
| Items: activate | Enter only                                                                | Enter **and** Space (per APG menuitem)                       |
| Tab from item   | `setOpenPopover(false)` only; no `preventDefault`, no explicit focus move | preventDefault, close, focus next after trigger (or trigger) |
| Home/End        | Not implemented                                                           | Home → first item, End → last item                           |
| Escape          | Implemented (close + return focus to trigger)                             | No change                                                    |


---

## 3. Reuse from Select

Select already implements:

- **Trigger:** [core/components/organisms/select/utils.tsx](core/components/organisms/select/utils.tsx) — `handleKeyDownTrigger` handles Enter, Space, ArrowDown, ArrowUp to open and highlight first/last.
- **List:** `handleKeyDown` handles ArrowUp/Down, Enter, **Space**, Home, End, Tab (no fallback in handler), Escape.
- **Tab-escape:** [core/components/organisms/select/Select.tsx](core/components/organisms/select/Select.tsx) — `handlePopoverKeyDown` on the list container: when `currentIndex === -1` (focus inside popover but not in `getFocusableElements`), it calls `getNextFocusableAfterTrigger(triggerRef.current, e.shiftKey)`, closes popover, and focuses that element or the trigger.
- **Helpers:** `getNextFocusableAfterTrigger`, `getFocusableElements` in Select utils.

**Reuse strategy:**

- **Space on trigger to open:** Mirror Select's trigger behavior in Menu trigger utils (add Enter + Space cases that open and highlight first item).
- **Space on item to activate:** Add Space (and `' '` / `Spacebar`) in Menu's `handleKeyDown` to do the same as Enter: activate focused item and close.
- **Tab-escape fallback:** Same logic as Select: container-level `onKeyDown` on the menu list div; when key is Tab and focus is inside the container but not in `getFocusableElements(container)` (because menuitems have `tabIndex={-1}`), run fallback: preventDefault, close menu, focus `getNextFocusableAfterTrigger(trigger, shiftKey)` or trigger.
- **getNextFocusableAfterTrigger:** Prefer moving it to a **shared** module so both Select and Menu use it (and future popover components can too). Suggested location: [core/utils/overlayHelper.ts](core/utils/overlayHelper.ts) (already has `getFocusableElements` and focus/trap helpers). Then Select imports it from overlayHelper and Menu imports from overlayHelper. If you prefer no refactor of Select in this sub-plan, Menu can import `getNextFocusableAfterTrigger` from Select utils for now and refactor to shared later.

---

## 4. Implementation tasks

### 4.1 Trigger: Enter and Space to open

**File:** [core/components/organisms/menu/trigger/utils.tsx](core/components/organisms/menu/trigger/utils.tsx)

In `handleKeyDown`, add cases so that **Enter** and **Space** (and `' '` / `Spacebar`) open the popover and set highlight first item (same as ArrowDown), e.g.:

- `case 'Enter':` — preventDefault, setOpenPopover(true), setHighlightFirstItem(true).
- `case ' ':` / `case 'Spacebar':` — same.

Ensure Escape and Tab still close without opening (current behavior is fine).

---

### 4.2 Items: Space to activate

**File:** [core/components/organisms/menu/utils.tsx](core/components/organisms/menu/utils.tsx)

In `handleKeyDown`, add handling for **Space** so it does the same as Enter:

- `case ' ':` and `case 'Spacebar':` — preventDefault, `(focusedOption as HTMLElement)?.click()`, `setOpenPopover?.(false)` (and any other cleanup already done for Enter).

This satisfies WAI-ARIA: menuitem is activated with both Enter and Space.

---

### 4.3 Tab-escape fallback (close + focus next after trigger)

**Applicability:** Same as Select. Menu items use `tabIndex={-1}` (see [MenuItem.tsx](core/components/organisms/menu/MenuItem.tsx)). So when focus is on a menu item, `getFocusableElements(container)` (if we used the same selector as Select, which excludes `tabindex="-1"`) does not include that item — i.e. `currentIndex === -1`. So we need a **container-level** Tab handler that:

1. Runs when Tab (or Shift+Tab) is pressed and the menu is open and focus is inside the menu list container.
2. Gets focusable elements inside the container (same semantics as Select: exclude `tabindex="-1"` so menuitems are excluded).
3. If `currentIndex === -1`: preventDefault, close menu, focus `getNextFocusableAfterTrigger(trigger, shiftKey)` or trigger.
4. If `currentIndex !== -1`: optional — either trap Tab within container (cycle) or same fallback. Select currently traps when currentIndex is valid; for Menu we can do the same for consistency (trap when there are focusable elements and focus is on one of them). If Menu only has menuitems (all tabindex=-1), then we always have currentIndex === -1, so we always do close + focus next. So implement the same as Select: when currentIndex === -1 → fallback; when currentIndex >= 0 → preventDefault and cycle focus within focusables.

**Shared helper:** Add `getNextFocusableAfterTrigger(trigger, shiftKey)` to [core/utils/overlayHelper.ts](core/utils/overlayHelper.ts) (or keep in Select utils and import from there in Menu). Use the same document focusable selector and logic as in Select utils. If added to overlayHelper, update Select to import from overlayHelper.

**File:** [core/components/organisms/menu/Menu.tsx](core/components/organisms/menu/Menu.tsx)

- Add a `handlePopoverKeyDown` (or equivalent) that:
  - Returns early if `!openPopover || e.key !== 'Tab' || !listRef.current`.
  - Uses `listRef.current` as container; if `!container.contains(document.activeElement)`, return.
  - Gets focusable elements inside container (use same selector as Select: exclude `tabindex="-1"`). Either import `getFocusableElements` from Select utils or from overlayHelper if unified.
  - If `focusables.indexOf(activeElement) === -1`: preventDefault, setOpenPopover(false), focus `getNextFocusableAfterTrigger(menuTriggerRef.current, e.shiftKey)` or `menuTriggerRef.current`.
  - Else: preventDefault and cycle (next/previous in focusables) like Select.
- Attach this handler to the menu list div: `onKeyDown={handlePopoverKeyDown}` on the `div` that has `ref={listRef}` and `role="menu"`.

**Note:** Menu's list div currently has no `tabIndex`; Select's list has `tabIndex={0}`. For the Tab handler to run when focus is on a menuitem (tabindex=-1), the keydown event must bubble from the menuitem to the list div — which it will. So no need to add tabIndex to the menu list unless you want it focusable for other reasons.

---

### 4.4 Home/End (optional)

**File:** [core/components/organisms/menu/utils.tsx](core/components/organisms/menu/utils.tsx)

In `handleKeyDown`, add:

- `case 'Home':` — preventDefault, focus first menu item (reuse or mirror `focusListItem('down', setFocusedOption, listRef)` from trigger/utils).
- `case 'End':` — preventDefault, focus last menu item (`focusListItem('up', ...)`).

Ensure `focusListItem` (or equivalent) is available in menu/utils — it already exists in [trigger/utils.tsx](core/components/organisms/menu/trigger/utils.tsx); you can export and use it from there or duplicate the logic in menu/utils for Home/End only.

---

### 4.5 Docs

**File:** [docs/src/pages/components/menu/interactions.mdx](docs/src/pages/components/menu/interactions.mdx)

- **Trigger:** Add a row (or update) so that  opens the popover (same as Enter). Current doc has Enter and arrows; add Space.
- **Items:** Add  to activate the focused item (same as Enter).
- **Tab (when popover is open):** Add a short note that when the user presses Tab (or Shift+Tab) from a menu item, the popover closes and focus moves to the next (or previous) focusable element in the page tab order after the trigger, or back to the trigger if there is none.
- **Home/End:** If implemented, add two rows: Home → focus first item; End → focus last item.
- Fix the **Escape** row for "Menu trigger in focus": current doc says "Nothing happens" — correct (Escape when menu is closed does nothing). When popover is open, Escape already documented as "Close the popover. Focus is now on the trigger." No change needed for Escape.

---

### 4.6 Tests

**Files:**

- [core/components/organisms/menu/**tests**/utils.test.tsx](core/components/organisms/menu/__tests__/utils.test.tsx)
  - Add tests for Space in `handleKeyDown` (items): Space activates focused option and closes menu (e.g. mock click and setOpenPopover).
- [core/components/organisms/menu/trigger/**tests](core/components/organisms/menu/trigger/)** or menu trigger tests
  - Add tests: Enter and Space on trigger open the popover and highlight first item (if test structure allows).
- [core/components/organisms/menu/**tests**/Menu.test.tsx](core/components/organisms/menu/__tests__/Menu.test.tsx)
  - Add test: with menu open and focus on a menu item, press Tab; assert popover closes and focus is on the next focusable after the trigger (or on trigger). Use a simple inline focusable (e.g. a button) after the Menu in the test DOM.

If `getNextFocusableAfterTrigger` is moved to overlayHelper, add or extend tests for it in overlayHelper tests (or keep existing tests in Select utils and add overlayHelper tests that mirror them).

---

## 5. Summary and order


| #   | Task                                                                                               | File(s)                                                                   |
| --- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| 1   | Trigger: Enter + Space to open                                                                     | menu/trigger/utils.tsx                                                    |
| 2   | Items: Space to activate                                                                           | menu/utils.tsx                                                            |
| 3   | Shared helper (optional): move getNextFocusableAfterTrigger to overlayHelper; update Select import | overlayHelper.ts, select/utils.tsx, select/Select.tsx                     |
| 4   | Tab-escape: handlePopoverKeyDown on list div, close + focus next/trigger                           | Menu.tsx, and getFocusableElements import (Select utils or overlayHelper) |
| 5   | Home/End in list                                                                                   | menu/utils.tsx (and focusListItem usage)                                  |
| 6   | Docs: Space on trigger and item, Tab note, Home/End                                                | docs/.../menu/interactions.mdx                                            |
| 7   | Tests: Space trigger/item, Tab-escape                                                              | menu **tests**                                                            |


Suggested implementation order: 1 → 2 → 3 (if doing shared helper) → 4 → 5 → 6 → 7.

---

## 6. Alignment with high-level plan

- **Foundation:** Uses key constants for Space/Enter (A1) and, if you later introduce **createListboxKeyHandler**, Menu could migrate to that for list keys; for this sub-plan, in-component handling is enough.
- **Reusability:** Tab-escape and getNextFocusableAfterTrigger are shared with Select (and optionally with other popover/list components), keeping the design system consistent and scalable.

