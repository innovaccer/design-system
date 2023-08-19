import * as React from 'react';

export function useMultiSelect() {
  const [selectedItemList, setSelectedItemList] = React.useState<any>([]);

  const onClickHandler = (e: any, item: any) => {
    console.log('hook onclickhandler called');
    let resultList = [...selectedItemList];
    if (selectedItemList.includes(item)) {
      resultList = selectedItemList.filter((cardItem: any) => item !== cardItem);
    } else {
      resultList.push(item);
    }
    setSelectedItemList(resultList);
  };

  const props = {
    selectedItemList,
    onClickHandler,
  };

  return props;
}
