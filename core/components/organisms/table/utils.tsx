import { RowData, GridProps } from '../grid';

const isElementPresent = (list: [], uniqueColumnName: string, value: any) => {
  const arr = list?.filter((item) => item[uniqueColumnName] === value);
  return arr.length > 0;
};

export const getUpdatedData = (
  data: GridProps['data'],
  uniqueColumnName: string,
  selectedList: [],
  isCancelSelection?: boolean,
  isSelectAll?: boolean
) => {
  const updatedData = data.map((item: RowData) => {
    if (
      isSelectAll ||
      (item._selected && !isCancelSelection) ||
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

const uniqueByKey = (arr: any[], key: string) => {
  const seen = new Set();
  return arr.filter((obj) => {
    const value = obj[key];
    if (seen.has(value)) {
      return false;
    } else {
      seen.add(value);
      return true;
    }
  });
};

export const removeDuplicate = (arrayOfObjects: any[], uniqueColumnName: string) => {
  return uniqueByKey(arrayOfObjects, uniqueColumnName);
};
