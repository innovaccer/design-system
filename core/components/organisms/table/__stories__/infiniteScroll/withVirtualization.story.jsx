import * as React from 'react';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/infiniteData/infiniteSchema';
import data from '@/components/organisms/grid/__stories__/_common_/infiniteData/infiniteList.ts';
import { Card, Table, Button } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { fetchData } from '@/components/organisms/grid/__stories__/_common_/infiniteData/fetchData';
import { action } from '@/utils/action';

export const withVirtualization = () => {
  const selectionActionRenderer = (selectedData, selectAll) => {
    action('selectedData', selectedData, 'selectAll', selectAll)();
    return (
      <div className="d-flex align-items-center">
        <Button size="tiny" className="mr-4">
          Delete
        </Button>
        <Button size="tiny">Export</Button>
      </div>
    );
  };

  const globalActionTrigger = () => {
    return <Button>Export</Button>;
  };

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          loaderSchema={loaderSchema}
          fetchData={fetchData}
          withHeader={true}
          uniqueColumnName="lastName"
          headerOptions={{
            selectionActionRenderer,
            withSearch: true,
            globalActionRenderer: globalActionTrigger,
            allowSelectAll: true,
          }}
          withCheckbox={true}
          withPagination={false}
          virtualRowOptions={{ buffer: 10, visibleRows: 20 }}
          enableRowVirtualization={true}
          enableInfiniteScroll={true}
          infiniteScrollOptions={{
            fetchRowsCount: 50,
            fetchThreshold: 'balanced',
          }}
        />
      </Card>
    </div>
  );
};

const customCode = `
() => {
  const [errorState, setErrorState] = React.useState(false);

  const translateData = (schema, data) => {
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

  const filterData = (schema, data, filterList) => {
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

  const sortData = (schema, data, sortingList) => {
    const sortedData = [...data];
    sortingList.forEach(l => {
      const sIndex = schema.findIndex(s => s.name === l.name);
      if (sIndex !== -1) {
        const defaultComparator = (a, b) => {
          const aData = translateData(schema[sIndex], a);
          const bData = translateData(schema[sIndex], b);
          return aData[l.name].title.localeCompare(bData[l.name].title);
        };

        const {
          comparator = defaultComparator
        } = schema[sIndex];

        sortedData.sort(comparator);
        if (l.type === 'desc') sortedData.reverse();
      }
    });

    return sortedData;
  };

  const paginateData = (data, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
    return paginatedData;
  };

  const data = ${JSON.stringify(data, null, 4)};
  const [formattedData, setFormattedData] = React.useState(data);

  const schema = [
    {
      name: 'empID',
      displayName: 'ID',
      resizable: true,
      sorting: false,
      width: '1%',
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '24%',
      resizable: true,
      tooltip: true,
      translate: a => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      filters: [
        { label: 'A-G', value: 'a-g' },
        { label: 'H-R', value: 'h-r' },
        { label: 'S-Z', value: 's-z' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          switch (filter) {
            case 'a-g':
              if (a.firstName[0].toLowerCase() >= 'a' && a.firstName[0].toLowerCase() <= 'g') return true;
              break;
            case 'h-r':
              if (a.firstName[0].toLowerCase() >= 'h' && a.firstName[0].toLowerCase() <= 'r') return true;
              break;
            case 's-z':
              if (a.firstName[0].toLowerCase() >= 's' && a.firstName[0].toLowerCase() <= 'z') return true;
              break;
          }
        }
        return false;
      },
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: '30%',
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '15%',
      resizable: true,
      comparator: (a, b) => a.gender.localeCompare(b.gender),
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.gender,
        statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
      }),
      filters: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      onFilterChange: (a, filters) => {
        for (const filter of filters) {
          if (a.gender.toLowerCase() === filter) return true;
        }
        return false;
      },
    },
    {
      name: 'icon',
      displayName: 'Icon',
      width: '10%',
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      sorting: false,
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: '20%',
      resizable: true,
      cellType: 'WITH_META_LIST',
      sorting: false,
      cellRenderer: props => {
        return (
          <>
            <Icon className="mr-5" name="events" />
            <GridCell
              {...props}
              schema={{
                ...props.schema,
                name: 'email'
              }}
            />
          </>
        );
      }
    },
  ];

  const errorTemplate = () => {
    return (
      <EmptyState>
        <EmptyState.Image src={"static/media/404-nothing-here-3.2871b1b3.svg"}></EmptyState.Image>
        <EmptyState.Title>Failed to load data</EmptyState.Title>
        <EmptyState.Description>
          We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
    );
  };

  const fetchData = (options) => {
    const {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm
    } = options;

    const onSearch = (d, searchTerm = '') => {
      return (
        d.firstName.toLowerCase().match(searchTerm.toLowerCase())
        || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
      );

      return true;
    }

    const filteredData = filterData(schema, data, filterList);
    const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
    const sortedData = sortData(schema, searchedData, sortingList);
    setFormattedData(sortedData);

    if (page && pageSize) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const start = (page - 1) * pageSize;
          const end = start + pageSize;
          const slicedData = sortedData.slice(start, end);
          resolve({
            searchTerm,
            schema,
            count: slicedData.length,
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
  }

  const loaderSchema = ${JSON.stringify(loaderSchema, null, 4)};

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }

  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  const selectionActionRenderer = (selectedData, selectAll) => {
    console.log('selectedData in output', selectedData, 'selectAll', selectAll);
    return (
      <div className="d-flex align-items-center">
        <Button size="tiny" className="mr-4">Delete</Button>
        <Button size="tiny">Export</Button>
      </div>
    )
  }

  return (
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
        <Table
          schema={schema}
          loaderSchema={loaderSchema}
          fetchData={fetchData}
          withHeader={true}
          uniqueColumnName="lastName"
          headerOptions={{
            selectionActionRenderer,
            withSearch: true,
            globalActionRenderer : globalActionTrigger,
            allowSelectAll: true,
          }}
          error={errorState}
          errorTemplate={errorTemplate}
          withCheckbox={true}
          withPagination={false}
          onSelect={(rowIndex, selected, selectedList, selectAll) => console.log(\`on-select: - rowIndex: \${ rowIndex } selected: \${ selected } selectedList: \${ JSON.stringify(selectedList) } selectAll: \${ selectAll } \`)}
          onPageChange={newPage => console.log(\`on-page-change:- \${newPage}\`)}
          virtualRowOptions={{ buffer: 10, visibleRows: 20 }}
          enableRowVirtualization={true}
          enableInfiniteScroll={true}
          infiniteScrollOptions={{
            fetchRowsCount: 50,
            fetchThreshold: 'balanced',
          }}
        />
      </Card>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Infinite Scroll/With Virtualization',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Async Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
