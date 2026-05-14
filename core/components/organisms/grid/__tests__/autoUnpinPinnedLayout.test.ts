import { getNextAutoUnpinTarget, pinnedLayoutSignature, pruneAutoUnpinStack } from '../autoUnpinPinnedLayout';

describe('autoUnpinPinnedLayout', () => {
  describe('getNextAutoUnpinTarget', () => {
    it('returns the right-most left-pinned column first', () => {
      const columns = [
        { name: 'a', pinned: 'left' as const },
        { name: 'b', pinned: 'left' as const },
        { name: 'c', pinned: 'left' as const },
      ];
      expect(getNextAutoUnpinTarget(columns)).toEqual({ name: 'c', side: 'left' });
    });

    it('returns the inner-most right-pinned column when no left pins', () => {
      const columns = [
        { name: 'x', pinned: 'right' as const },
        { name: 'y', pinned: 'right' as const },
      ];
      expect(getNextAutoUnpinTarget(columns)).toEqual({ name: 'x', side: 'right' });
    });

    it('ignores hidden columns', () => {
      const columns = [
        { name: 'a', pinned: 'left' as const, hidden: true },
        { name: 'b', pinned: 'left' as const },
      ];
      expect(getNextAutoUnpinTarget(columns)).toEqual({ name: 'b', side: 'left' });
    });

    it('returns null when nothing is pinned', () => {
      expect(getNextAutoUnpinTarget([{ name: 'a' }])).toBeNull();
    });
  });

  describe('pruneAutoUnpinStack', () => {
    it('removes entries when the column was re-pinned to the saved side', () => {
      const stack = [{ name: 'a', side: 'left' as const }];
      const columns = [{ name: 'a', pinned: 'left' as const }];
      expect(pruneAutoUnpinStack(stack, columns)).toEqual([]);
    });

    it('keeps entries that are still unpinned', () => {
      const stack = [{ name: 'a', side: 'left' as const }];
      const columns = [{ name: 'a' }];
      expect(pruneAutoUnpinStack(stack, columns)).toEqual(stack);
    });

    it('removes entries if the column becomes hidden', () => {
      const stack = [{ name: 'a', side: 'left' as const }];
      const columns = [{ name: 'a', hidden: true }];
      expect(pruneAutoUnpinStack(stack, columns)).toEqual([]);
    });
  });

  describe('pinnedLayoutSignature', () => {
    it('changes when pin sides change', () => {
      const a = [{ name: 'x', pinned: 'left' as const }];
      const b = [{ name: 'x', pinned: 'right' as const }];
      expect(pinnedLayoutSignature(a)).not.toEqual(pinnedLayoutSignature(b));
    });
  });
});
