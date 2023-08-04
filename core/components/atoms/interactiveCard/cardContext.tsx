import * as React from 'react';

export const CardContext = React.createContext<any>({
  selectedOption: [],
  setSelectedOptions: () => {},
  multiSelect: false,
});
