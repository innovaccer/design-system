import { fetchDataFn, Schema } from '../../Grid';
import data from './data';
const schema: Schema = require('./schema').default;
import { filterData, sortData } from '../../utility';

export const fetchData: fetchDataFn = (options) => {
  const {
    page,
    pageSize,
    sortingList,
    filterList
  } = options;

  const filteredData = filterData(schema, data, filterList);
  const sortedData = sortData(schema, filteredData, sortingList);

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