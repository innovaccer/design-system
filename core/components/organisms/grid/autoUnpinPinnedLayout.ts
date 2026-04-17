/**
 * When the unpinned "main" region of the grid is narrower than AUTO_UNPIN_MAIN_REMAINDER_MAX,
 * the Grid may auto-unpin columns (one per layout pass).
 * When checking if a column should be repinned, it requires the unpin threshold PLUS the column width
 * PLUS this buffer, to prevent layout oscillation.
 */
export const AUTO_UNPIN_MAIN_REMAINDER_MAX = 320;
export const AUTO_REPIN_BUFFER = 20;

export type PinnedSide = 'left' | 'right';

export type AutoUnpinStackEntry = {
  name: string;
  side: PinnedSide;
};

type ColumnLike = {
  name: string;
  hidden?: boolean;
  pinned?: PinnedSide | 'unpin';
};

/**
 * Prefer unpinning the inner-most left pin (last in order), then the inner-most right pin (first in order).
 */
export function getNextAutoUnpinTarget(columns: ColumnLike[]): AutoUnpinStackEntry | null {
  const visible = columns.filter((s) => !s.hidden);
  const leftPinned = visible.filter((s) => s.pinned === 'left');
  if (leftPinned.length) {
    return { name: leftPinned[leftPinned.length - 1].name, side: 'left' };
  }
  const rightPinned = visible.filter((s) => s.pinned === 'right');
  if (rightPinned.length) {
    return { name: rightPinned[0].name, side: 'right' };
  }
  return null;
}

/**
 * Drop stack entries that no longer represent "we auto-unpinned this and should restore".
 */
/** Stable string for comparing pin layout across schema reference changes. */
export function pinnedLayoutSignature(columns: ColumnLike[]): string {
  return columns
    .filter((s) => !s.hidden)
    .map((s) => `${s.name}:${s.pinned === 'left' || s.pinned === 'right' ? s.pinned : ''}`)
    .join('|');
}

export function pruneAutoUnpinStack(stack: AutoUnpinStackEntry[], columns: ColumnLike[]): AutoUnpinStackEntry[] {
  const names = new Set(columns.map((s) => s.name));
  return stack.filter((entry) => {
    if (!names.has(entry.name)) return false;
    const col = columns.find((s) => s.name === entry.name)!;
    if (col.hidden) return false;
    if (col.pinned === entry.side) return false;
    if (col.pinned && col.pinned !== entry.side) return false;
    return !col.pinned;
  });
}
