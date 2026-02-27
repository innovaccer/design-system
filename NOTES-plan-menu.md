# Personal notes (remove this file on final PR merge)

# Menu keyboard a11y — WCAG 2.2 AA

**Goal:** Menu fully keyboard-accessible. Trigger opens on Enter+Space; items activate on Space; Tab closes and moves focus to next/previous after trigger; optional Home/End. Reuse Select's Tab-escape pattern.

---

## Current → Target

| Area | Now | Target |
|------|-----|--------|
| Trigger open | Arrows only | Enter + Space too |
| Item activate | Enter only | Enter + Space |
| Tab from item | Close only, no focus move | preventDefault, close, focus next after trigger (or trigger) |
| Home/End | — | First / last item |

Escape already correct (close + return focus to trigger).

---

## Tasks (order)

1. **Trigger:** `menu/trigger/utils.tsx` — add Enter and Space (and `' '` / `Spacebar`) to open + highlight first. Same as ArrowDown.
2. **Items:** `menu/utils.tsx` — add Space (and `' '` / `Spacebar`) to activate like Enter (click focused, close).
3. **Tab-escape:** `Menu.tsx` — add `handlePopoverKeyDown` on list div. On Tab: if focus inside but not in getFocusableElements (menuitems have tabindex=-1), preventDefault, close, focus `getNextFocusableAfterTrigger(trigger, shiftKey)` or trigger. Import getFocusableElements and getNextFocusableAfterTrigger (Select utils or overlayHelper).
4. **Shared helper (optional):** Move `getNextFocusableAfterTrigger` to `core/utils/overlayHelper.ts`; Select and Menu both import from there.
5. **Home/End:** `menu/utils.tsx` — Home → first item, End → last (reuse `focusListItem` from trigger/utils).
6. **Docs:** `docs/.../menu/interactions.mdx` — add Space on trigger and item; note for Tab (close + focus next/prev); add Home/End rows if done.
7. **Tests:** Space on trigger and items; Tab from item closes and focus moves to next or trigger.

---

## Reuse from Select

- Trigger: mirror `handleKeyDownTrigger` (Enter, Space, ArrowDown, ArrowUp).
- Items: mirror list `handleKeyDown` (Space = activate like Enter).
- Tab-escape: same as Select's `handlePopoverKeyDown` (currentIndex === -1 → fallback). Use same getFocusableElements (exclude tabindex=-1).
