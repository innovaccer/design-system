import { RowData, GridProps } from '../grid';

const isElementPresent = (list: [], uniqueColumnName: string, value: any) => {
  const arr = list?.filter((item) => item[uniqueColumnName] === value);
  return arr.length > 0;
};

export const getUpdatedData = (
  data: GridProps['data'],
  selectedList: [],
  uniqueColumnName?: string,
  isCancelSelection?: boolean,
  isSelectAll?: boolean
) => {
  const updatedData = data.map((item: RowData) => {
    if (
      isSelectAll ||
      (item._selected && !isCancelSelection) ||
      (uniqueColumnName &&
        item[uniqueColumnName] &&
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

const uniqueByKey = (arr: RowData[], key: string) => {
  const list = new Set();
  return arr.filter((obj) => {
    const value = obj[key];
    if (list.has(value)) {
      return false;
    } else {
      list.add(value);
      return true;
    }
  });
};

export const removeDuplicate = (data: RowData[], uniqueColumnName?: string) => {
  if (uniqueColumnName) {
    return uniqueByKey(data, uniqueColumnName);
  }
  return data;
};
