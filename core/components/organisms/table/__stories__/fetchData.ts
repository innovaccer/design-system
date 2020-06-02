import { CellSchema, fetchDataFn } from '../Table';
import data from './data';
const schema: CellSchema[] = require('./schema').default;

export const fetchData: fetchDataFn = (options) => {
  const {
    page,
    pageSize,
    sortingList,
    filterList = {}
  } = options;

  let filteredData = data;
  Object.keys(filterList).forEach(schemaName => {
    const filters = filterList[schemaName];
    const sIndex = schema.findIndex(s => s.name === schemaName);
    const { onFilterChange } = schema[sIndex];
    if (filters.length && onFilterChange) {
      filteredData = filteredData.filter(d => onFilterChange(d, filters));
    }
  });

  const sortedData = filteredData;
  sortingList?.forEach((l: Record<string, any>) => {
    const sIndex = schema.findIndex(s => s.name === l.name);
    const { sortFn } = schema[sIndex];
    sortedData.sort(sortFn);
    if (l.type === 'desc') sortedData.reverse();
  });

  if (page === 2) return Promise.reject();

  if (page && pageSize) {
    return new Promise(resolve => {
      setTimeout(() => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const slicedData = sortedData.slice(start, end);
        resolve({
          schema,
          totalRecords: sortedData.length,
          data: slicedData,
        });
      }, 2000);
    });
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        schema,
        totalRecords: sortedData.length,
        data: sortedData,
      });
    }, 2000);
  });
};