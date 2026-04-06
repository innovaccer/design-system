import * as React from 'react';
import uidGenerator from '@/utils/uidGenerator';

const reactUseId = (React as { useId?: () => string }).useId;

function useStableDomIdWithReactUseId(prefix: string): string | undefined {
  const generated = reactUseId!();
  return `${prefix}-${generated}`;
}

function useStableDomIdWithUidFallback(prefix: string): string | undefined {
  const [id, setId] = React.useState<string>();

  React.useEffect(() => {
    setId(`${prefix}-${uidGenerator()}`);
  }, [prefix]);

  return id;
}

/**
 * DOM `id` prefix helper: stable across SSR + hydration on React 18+ (`useId`).
 * On React 16/17, falls back to `uidGenerator` (not SSR-stable); pass an explicit `id` prop when SSR matters.
 */
export const useStableDomId =
  typeof reactUseId === 'function' ? useStableDomIdWithReactUseId : useStableDomIdWithUidFallback;
