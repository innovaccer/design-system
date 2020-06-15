import { RowData, Data, ColumnSchema, Schema, FetchDataOptions } from './Grid';

export const updateBatchData = (data: Data, rowIndexes: number[], dataUpdate: Partial<RowData>): Data => {
  for (const rowIndex of rowIndexes) {
    data[rowIndex] = {
      ...data[rowIndex],
      ...dataUpdate
    };
  }

  return data;
};

export function translateData(schema: ColumnSchema, data: RowData) {
  let newData = data;

  if (schema.translate) {
    const translatedData = schema.translate(data);
    newData = {
      ...newData,
      [schema.name]: typeof translatedData === 'object' ? {
        ...newData[schema.name],
        ...translatedData
      } : translatedData
    };
  }
  if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

  return newData;
}

export const filterData = (schema: Schema, data: Data, filterList: FetchDataOptions['filterList']): Data => {
  let filteredData = data;
  if (filterList) {
    Object.keys(filterList).forEach(schemaName => {
      const filters = filterList[schemaName];
      const sIndex = schema.findIndex(s => s.name === schemaName);
      const { onFilterChange } = schema[sIndex];
      if (filters.length && onFilterChange) {
        filteredData = filteredData.filter(d => onFilterChange(d, filters));
      }
    });
  }

  return filteredData;
};

export const sortData = (schema: Schema, data: Data, sortingList: FetchDataOptions['sortingList']): Data => {
  const sortedData = data;
  sortingList?.forEach(l => {
    const sIndex = schema.findIndex(s => s.name === l.name);
    const { sortFn } = schema[sIndex];
    if (sortFn) {
      sortedData.sort(sortFn);
      if (l.type === 'desc') sortedData.reverse();
    }
  });

  return sortedData;
};

export const paginateData = (data: Data, page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = data.slice(start, end);
  return paginatedData;
};
