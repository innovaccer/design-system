import React, { useCallback, useMemo, useState } from 'react';
import { Card, Table, EmptyState, Checkbox, ChoiceList, Text, CardSubdued, Flex } from '@/index';
import { TableProps } from '@/index.type';
import { AsyncTable } from './_common_/types';
import { fetchUsersData } from './_common_/fetchData';

export const filtering = (): React.ReactElement => {
  const [showHead, setShowHead] = useState(true);
  const [type, setType] = useState<'data' | 'resource'>('data');
  const [size, setSize] = useState<'standard' | 'tight' | 'compressed'>('standard');
  const [separator, setSeparator] = useState(false);
  const [withHeader, setWithHeader] = useState(true);
  const [filterPosition, setFilterPosition] = useState<'GRID' | 'HEADER'>('HEADER');
  const [withPagination, setWithPagination] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  interface ErrorTemplateProps {
    //Error types: 'FAILED_TO_FETCH' | 'NO_RECORDS_FOUND' | 'DEFAULT'
    errorType?: TableProps['errorType'];
  }
  const errorTemplate = (props: ErrorTemplateProps): React.ReactElement => {
    const { errorType = 'DEFAULT' } = props;

    const errorConfig: Record<string, { title: string; description: string }> = {
      FAILED_TO_FETCH: {
        title: 'Failed to fetch data',
        description: 'We are unable to fetch the data. Try again.',
      },
      NO_RECORDS_FOUND: {
        title: 'No results found',
        description: 'Try adjusting your search or filters to find what you are looking for.',
      },
      DEFAULT: {
        title: 'No results found',
        description: 'Try adjusting your search or filters to find what you are looking for.',
      },
    };

    const config = errorConfig[errorType] || errorConfig.DEFAULT;

    return (
      <EmptyState>
        <EmptyState.Title>{config.title}</EmptyState.Title>
        <EmptyState.Description>{config.description}</EmptyState.Description>
      </EmptyState>
    );
  };

  const PAGE_SIZE = 8;

  type TableRowData = TableProps['data'][number] & {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
  };

  type StatusAppearance = {
    Active: 'success';
    Inactive: 'default';
  };

  const statusAppearance: StatusAppearance = {
    Active: 'success',
    Inactive: 'default',
  };

  const schema: TableProps['schema'] = useMemo(
    () => [
      {
        name: 'name',
        displayName: 'Name',
        width: '30%',
        cellType: 'AVATAR_WITH_TEXT',
        sorting: true,
        filterType: 'singleSelect' as const,
        translate: (a: TableProps['data'][number]) => {
          const rowData = a as TableRowData;
          return {
            title: `${rowData.firstName} ${rowData.lastName}`,
            firstName: rowData.firstName,
            lastName: rowData.lastName,
          };
        },
      },
      {
        name: 'email',
        displayName: 'Email',
        width: '25%',
        sorting: true,
      },
      {
        name: 'role',
        displayName: 'Role',
        width: '20%',
        sorting: true,
        filters: [
          { label: 'Admin', value: 'Admin' },
          { label: 'User', value: 'User' },
        ],
      },
      {
        name: 'status',
        displayName: 'Status',
        width: '15%',
        cellType: 'STATUS_HINT',
        sorting: true,
        filters: [
          { label: 'Active', value: 'Active' },
          { label: 'Inactive', value: 'Inactive' },
        ],
        filterType: 'singleSelect' as const,
        translate: (a: TableProps['data'][number]) => {
          const rowData = a as TableRowData;
          const status = rowData.status as keyof StatusAppearance;
          return {
            title: status,
            statusAppearance: statusAppearance[status],
          };
        },
      },
    ],
    [statusAppearance]
  );

  const fetchData: TableProps['fetchData'] = useCallback(
    async (options) => {
      const response = await fetchUsersData(options);
      return {
        ...response,
        schema: schema,
      };
    },
    [schema]
  );

  return (
    <div>
      <Card className="overflow-hidden vh-75">
        <Table
          // Required props for async table
          fetchData={fetchData}
          loaderSchema={schema}
          // Basic configuration
          showHead={showHead}
          type={type} // 'data' | 'resource' (default: 'data')
          size={size} // 'standard' | 'compressed' | 'tight' (default: 'standard')
          separator={separator}
          // Header configuration
          withHeader={withHeader}
          headerOptions={{
            withSearch: true,
            searchPlaceholder: 'Search by name, email, or role',
            dynamicColumn: true,
            // allowSelectAll?: boolean;
            // customSelectionLabel?: string;
            // globalActionRenderer?: (data: Data) => React.ReactNode;
            // selectionActionRenderer?: (selectedRows: RowData[], selectAll?: boolean) => React.ReactNode;
            // selectedLabelRenderer?: (context: Record<string, any>) => string;
            // unSelectedLabelRenderer?: (context: Record<string, any>) => string;
            // children?: React.ReactNode;
          }}
          // Filter configuration
          filterPosition={filterPosition} // 'GRID' | 'HEADER' (default: 'GRID')
          // Pagination configuration
          withPagination={withPagination} // default: true
          page={1} // default: 1
          pageSize={PAGE_SIZE} // default: 15
          paginationType="jump" // default: 'jump'
          pageJumpDebounceDuration={750} // default: 750
          // Selection configuration
          withCheckbox={false} // default: undefined
          checkboxAlignment="center" // 'top' | 'center' | 'bottom' (default: 'center')
          selectDisabledRow={false} // default: undefined
          uniqueColumnName={undefined} // for persistent selection
          // Menu and actions
          showMenu={showMenu} // default: true
          draggable={true} // default: true
          // Sorting configuration
          multipleSorting={true} // default: true
          sortingList={[]} // default: []
          // Filter configuration
          // preselected filters, this will be passed to the filterList in fetchData
          // to work filters should be passed in column schema
          filterList={{
            role: ['Admin'],
          }} // default: {}
          // Search configuration
          searchDebounceDuration={750} // default: 750
          // onSearch?: (data: Data, searchTerm: string) => Data; // for sync table only

          // Error handling
          errorTemplate={errorTemplate}
          // errorType?: string;

          // Row interactions
          onRowClick={undefined} // required if type='resource'
          onSelect={undefined} // (rowIndexes: number[], selected: boolean, allSelected: RowData[], selectAll?: boolean) => void
          onPageChange={undefined} // (page: number) => void
          // Nested rows configuration
          nestedRows={false} // default: undefined
          nestedRowRenderer={undefined}
          showNestedRowTrigger={true} // default: true
          // Tooltip configuration
          headCellTooltip={false} // default: undefined
          // Virtualization (for large datasets)
          enableRowVirtualization={false} // default: undefined
          virtualRowOptions={{
            visibleRows: 200, // default: 200
            buffer: 10, // default: 10
          }}
          // Infinite scroll (for async table without pagination)
          enableInfiniteScroll={false} // default: undefined
          infiniteScrollOptions={{
            fetchRowsCount: 50, // default: 50
            fetchThreshold: 'balanced', // 'early' | 'balanced' | 'lazy' | 'at-end' (default: 'balanced')
            // fetchErrorRenderer?: (fetchNextRowsFn: () => Promise<void>) => React.ReactNode;
            // retryFetchRenderer?: () => React.ReactNode;
          }}
          // Scroll handling
          onScroll={undefined} // (event: Event) => void
          // Search highlighting
          highlightRegex={undefined} // (searchTerm: string) => RegExp

          // Base props
          // className?: string;
          // data-test?: string;
        />
      </Card>
      {/* remove this card to hide the table props controls */}
      <CardSubdued className="mt-6 px-6 py-4">
        <Text weight="strong" className="mb-6">
          Table Props Controls
        </Text>
        <Flex direction="row" wrap="wrap" gap="spacing-60" className="mb-6">
          <Checkbox checked={showHead} onChange={(event) => setShowHead(event.target.checked)} label="showHead" />
          <Checkbox checked={separator} onChange={(event) => setSeparator(event.target.checked)} label="separator" />
          <Checkbox checked={withHeader} onChange={(event) => setWithHeader(event.target.checked)} label="withHeader" />
          <Checkbox
            checked={withPagination}
            onChange={(event) => setWithPagination(event.target.checked)}
            label="withPagination"
          />
          <Checkbox checked={showMenu} onChange={(event) => setShowMenu(event.target.checked)} label="showMenu" />
        </Flex>
        <Flex direction="row" wrap="wrap" gap="spacing-60">
          <ChoiceList
            alignment="vertical"
            choices={[
              { label: 'data', name: 'type', value: 'data' },
              { label: 'resource', name: 'type', value: 'resource' },
            ]}
            title="type"
            selected={[type]}
            onChange={(_event, selected) => selected.length > 0 && setType(selected[0] as 'data' | 'resource')}
          />
          <ChoiceList
            alignment="vertical"
            choices={[
              { label: 'standard', name: 'size', value: 'standard' },
              { label: 'compressed', name: 'size', value: 'compressed' },
              { label: 'tight', name: 'size', value: 'tight' },
            ]}
            title="size"
            selected={[size]}
            onChange={(_event, selected) =>
              selected.length > 0 && setSize(selected[0] as 'standard' | 'tight' | 'compressed')
            }
          />
          <ChoiceList
            alignment="vertical"
            choices={[
              { label: 'GRID', name: 'filterPosition', value: 'GRID' },
              { label: 'HEADER', name: 'filterPosition', value: 'HEADER' },
            ]}
            title="filterPosition"
            selected={[filterPosition]}
            onChange={(_event, selected) => selected.length > 0 && setFilterPosition(selected[0] as 'GRID' | 'HEADER')}
          />
        </Flex>
      </CardSubdued>
    </div>
  );
};

export default {
  title: 'Components/Table/Filtering',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        tsxStory: true,
        title: 'Table Filters',
        props: {
          components: { AsyncTable },
        },
      },
    },
  },
};
