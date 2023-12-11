import { RowData, Data, ColumnSchema, Schema, FetchDataOptions, Comparator } from './Grid';

export const updateBatchData = (
  data: Data,
  rowIndexes: number[],
  dataUpdate: Partial<RowData>,
  selectDisabledRow?: boolean
): Data => {
  const updatedData = [...data];
  for (const rowIndex of rowIndexes) {
    if ((data[rowIndex].disabled && selectDisabledRow) || !data[rowIndex].disabled) {
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        ...dataUpdate,
      };
    }
  }

  return updatedData;
};

export function translateData(schema: ColumnSchema, data: RowData) {
  const newData = { ...data };

  if (schema.translate) {
    const translatedData = schema.translate(data);
    newData[schema.name] =
      translatedData !== null && typeof translatedData === 'object'
        ? {
            ...newData[schema.name],
            ...translatedData,
          }
        : translatedData;
  }
  if (newData[schema.name] === null || typeof newData[schema.name] !== 'object') {
    newData[schema.name] = { title: newData[schema.name] };
  }

  return newData;
}

export const filterData = (schema: Schema = [], data: Data = [], filterList: FetchDataOptions['filterList']): Data => {
  let filteredData = data;
  if (filterList) {
    Object.keys(filterList).forEach((schemaName) => {
      const filters = filterList[schemaName];
      const sIndex = schema.findIndex((s) => s.name === schemaName);
      const { onFilterChange } = schema[sIndex];
      if (filters.length && onFilterChange) {
        filteredData = filteredData.filter((d) => onFilterChange(d, filters));
      }
    });
  }

  return filteredData;
};

export const sortData = (schema: Schema = [], data: Data = [], sortingList: FetchDataOptions['sortingList']): Data => {
  const sortedData = [...data];
  sortingList?.forEach((l) => {
    const sIndex = schema.findIndex((s) => s.name === l.name);
    if (sIndex !== -1) {
      const defaultComparator: Comparator = (a, b) => {
        const aData = translateData(schema[sIndex], a);
        const bData = translateData(schema[sIndex], b);
        return aData[l.name].title.localeCompare(bData[l.name].title);
      };

      const { comparator = defaultComparator } = schema[sIndex];

      sortedData.sort(comparator);
      if (l.type === 'desc') sortedData.reverse();
    }
  });

  return sortedData;
};

export const paginateData = (data: Data = [], page: number, pageSize: number): Data => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = data.slice(start, end);
  return paginatedData;
};
