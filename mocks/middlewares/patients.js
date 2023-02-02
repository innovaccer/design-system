import { patients as data } from '../data/patients';

const translateData = (schema, data) => {
  let newData = data;

  if (schema.translate) {
    const translatedData = schema.translate(data);
    newData = {
      ...newData,
      [schema.name]:
        typeof translatedData === 'object'
          ? {
              ...newData[schema.name],
              ...translatedData,
            }
          : translatedData,
    };
  }
  if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

  return newData;
};

const filterData = (schema, data, filterList) => {
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

const sortData = (schema, data, sortingList) => {
  const sortedData = [...data];
  sortingList.forEach((l) => {
    const sIndex = schema.findIndex((s) => s.name === l.name);
    if (sIndex !== -1) {
      const defaultComparator = (a, b) => {
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

const schema = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    resizable: true,
    separator: true,
    tooltip: true,
    filters: [
      { label: 'A-G', value: 'a-g' },
      { label: 'H-R', value: 'h-r' },
      { label: 'S-Z', value: 's-z' },
    ],
    cellType: 'AVATAR_WITH_TEXT',
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 350,
    resizable: true,
    sorting: false,
    cellType: 'WITH_META_LIST',
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 200,
    resizable: true,
    cellType: 'STATUS_HINT',
    filters: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
  },
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    resizable: true,
    align: 'center',
    cellType: 'ICON',
    sorting: false,
  },
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    resizable: true,
    align: 'center',
    cellType: 'ICON',
    sorting: false,
  },
  {
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    resizable: true,
    cellType: 'WITH_META_LIST',
    sorting: false,
  },
];

const fetchData = (options) => {
  const { page = 1, pageSize = 5, sortingList = [], filterList = {}, searchTerm } = options;

  const onSearch = (d, searchTerm = '') => {
    return (
      d.firstName.toLowerCase().match(searchTerm.toLowerCase()) ||
      d.lastName.toLowerCase().match(searchTerm.toLowerCase())
    );
  };

  const filteredData = filterData(schema, data, filterList);
  const searchedData = filteredData.filter((d) => onSearch(d, searchTerm));
  const sortedData = sortData(schema, searchedData, sortingList);

  if (page && pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const slicedData = sortedData.slice(start, end);
    return {
      searchTerm,
      schema,
      count: sortedData.length,
      data: slicedData,
    };
  }

  return {
    searchTerm,
    schema,
    count: sortedData.length,
    data: sortedData,
  };
};

export const patients = (req, res, ctx) => {
  const params = req.url.searchParams;

  let options = {};
  params.forEach((value, key) => {
    options[key] = value;
  });

  return res(ctx.status(200), ctx.json(fetchData(options)));
};
