import { createContext } from 'react';

type CollapsibleContext = {
  hoverable: boolean;
};

const context = createContext<CollapsibleContext>({
  hoverable: true,
});

export const CollapsibleProvider = context.Provider;
export default context;
