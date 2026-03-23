import * as React from 'react';

// TODO: Replace with React.useId() after upgrading to React 18+.
// Module-scoped counter is safe for client-only rendering (no SSR).
let componentIdCounter = 0;

export const useComponentId = (prefix: string, providedId?: string) => {
  const idRef = React.useRef<string>(providedId || '');

  if (!idRef.current) {
    componentIdCounter += 1;
    idRef.current = `${prefix}-${componentIdCounter}`;
  }

  return idRef.current;
};

export default useComponentId;
