import * as React from 'react';

const selectedCardValues = new Map();

export function useMultiSelect() {
  const [selectedCardIds, setSelectedCardIds] = React.useState<string[]>([]);

  const isCardSelected = (id: string) => {
    return selectedCardIds.includes(id);
  };

  const updateCardSelection = (id: string, value?: object) => {
    let idList = [...selectedCardIds];

    if (isCardSelected(id)) {
      idList = selectedCardIds.filter((cardKey: string) => id !== cardKey);
      selectedCardValues.delete(id);
    } else {
      idList.push(id);
      selectedCardValues.set(id, value);
    }

    setSelectedCardIds(idList);
  };

  return {
    selectedCardIds,
    selectedCardValues,
    isCardSelected,
    updateCardSelection,
  };
}
