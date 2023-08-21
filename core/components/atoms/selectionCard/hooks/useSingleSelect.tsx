import * as React from 'react';

export function useSingleSelect() {
  const [selectedItemList, setSelectedItemList] = React.useState<string[]>([]);

  const updateSelection = (item: string) => {
    console.log('inside single select');
    let resultList = [...selectedItemList];
    if (selectedItemList.includes(item)) {
      resultList = [];
    } else {
      resultList = [item];
    }
    setSelectedItemList(resultList);
  };

  return {
    selectedItemList,
    updateSelection,
  };
}
