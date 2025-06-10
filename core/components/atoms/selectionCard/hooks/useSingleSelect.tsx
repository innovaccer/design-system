import { useState } from 'react';

export function useSingleSelect() {
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);
  const [selectedCardValues, setSelectedCardValues] = useState<object[]>([]);

  const isCardSelected = (id: string) => {
    return selectedCardIds.includes(id);
  };

  const updateCardSelection = (id: string, value?: object) => {
    let idList = [...selectedCardIds];
    let valueList = [...selectedCardValues];

    if (selectedCardIds.includes(id)) {
      idList = [];
      valueList = [];
    } else {
      idList = [id];
      valueList = value ? [value] : [];
    }
    setSelectedCardIds(idList);
    setSelectedCardValues(valueList);
  };

  return {
    selectedCardIds,
    selectedCardValues,
    isCardSelected,
    updateCardSelection,
  };
}
