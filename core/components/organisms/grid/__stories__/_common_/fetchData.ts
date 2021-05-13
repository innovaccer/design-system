import { fetchDataFunction, Schema, RowData } from '../../Grid';
import data from './data';
const schema: Schema = require('./schema').default;
import { filterData, sortData } from '../../utility';

export const fetchData: fetchDataFunction = (options) => {
  const {
    page,
    pageSize,
    sortingList,
    filterList,
    searchTerm
  } = options;

  const onSearch = (d: RowData, searchTerm: string = '') => {
    return (
      d.firstName.toLowerCase().match(searchTerm.toLowerCase())
      || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
    );

    return true;
  }

  const filteredData = filterData(schema, data, filterList);
  const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
  const sortedData = sortData(schema, searchedData, sortingList);

  if (page && pageSize) {
    return new Promise(resolve => {
      window.setTimeout(() => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const slicedData = sortedData.slice(start, end);
        resolve({
          searchTerm,
          schema,
          count: sortedData.length,
          data: slicedData,
        });
      }, 2000);
    });
  }

  return new Promise(resolve => {
    window.setTimeout(() => {
      resolve({
        searchTerm,
        schema,
        count: sortedData.length,
        data: sortedData,
      });
    }, 2000);
  });
};