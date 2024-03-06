import { RowData, GridProps } from '../grid';

const isElementPresent = (list: [], uniqueColumnName: string, value: any) => {
  const arr = list?.filter((item) => item[uniqueColumnName] === value);
  return arr.length > 0;
};

export const getUpdatedData = (
  data: GridProps['data'],
  uniqueColumnName: string,
  selectedList: [],
  isSelectAll?: boolean,
  isCancelSelection?: boolean
) => {
  const updatedData = data.map((item: RowData) => {
    if (
      isSelectAll ||
      (item[uniqueColumnName] &&
        selectedList &&
        isElementPresent(selectedList, uniqueColumnName, item[uniqueColumnName]) &&
        !isCancelSelection)
    ) {
      item._selected = true;
    } else if (isCancelSelection) {
      item._selected = false;
    } else {
      item._selected = false;
    }

    return item;
  });

  return updatedData;
};
