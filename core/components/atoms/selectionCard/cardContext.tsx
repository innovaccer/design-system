import * as React from 'react';

interface SelectionCardContext {
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
  multiSelect?: boolean;
}

export const CardContext = React.createContext<SelectionCardContext>({
  selectedOptions: [],
  setSelectedOptions: () => {},
  multiSelect: false,
});
