import * as React from 'react';
import { Button, Card, Chip, Flex, Menu, Table, Text } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { mockUsersData } from '../_common_/mockUsersData';
import { action } from '@/utils/action';

const DEPARTMENTS = ['Clinical Ops', 'Population Health', 'Quality', 'Revenue'];
const PROGRAMS = ['ACO', 'MSSP', 'PCF', 'BPCI'];
const SITES = ['Boston', 'Austin', 'Denver', 'Seattle'];
const PRIORITIES = ['P1', 'P2', 'P3', 'P4'];

/** When the table is 320px wide, no column max should exceed this (leaves room for scroll/chrome). */
const COLUMN_CAP_NARROW = 300;
const COLUMN_CAP_WIDE = 560;

/** Wide filter popovers (400px min) on short-named edge columns; middle column uses 320px min when wide mode is on. */
const WIDE_FILTER_OPTIONS = { minWidth: '400px', maxWidth: '480px' };
const MIDDLE_WIDE_FILTER_OPTIONS = { minWidth: '320px', maxWidth: '400px' };

const buildLoaderSchema = (isNarrow, showWideFilters) => {
  const laneOnly = showWideFilters ? [{ name: 'lane', displayName: 'Lane', width: isNarrow ? 96 : 120 }] : [];
  const bandOnly = showWideFilters ? [{ name: 'band', displayName: 'Band', width: isNarrow ? 88 : 112 }] : [];
  const tierOnly = showWideFilters ? [{ name: 'tier', displayName: 'Tier', width: isNarrow ? 96 : 120 }] : [];
  return [
    { name: 'id', displayName: 'ID', width: isNarrow ? 48 : 72 },
    { name: 'member', displayName: 'Member', width: isNarrow ? 200 : 260 },
    { name: 'email', displayName: 'Email', width: isNarrow ? 240 : 300 },
    ...laneOnly,
    { name: 'department', displayName: 'Department', width: isNarrow ? 176 : 200 },
    { name: 'program', displayName: 'Program', width: isNarrow ? 88 : 104 },
    { name: 'site', displayName: 'Site', width: isNarrow ? 96 : 104 },
    { name: 'priority', displayName: 'Priority', width: isNarrow ? 64 : 72 },
    ...bandOnly,
    { name: 'role', displayName: 'Role', width: isNarrow ? 120 : 148 },
    { name: 'status', displayName: 'Status', width: isNarrow ? 108 : 124 },
    { name: 'region', displayName: 'Coverage region', width: isNarrow ? COLUMN_CAP_NARROW : 400 },
    ...tierOnly,
    { name: 'actions', displayName: '', width: isNarrow ? 48 : 56 },
  ];
};

const responsivenessRows = mockUsersData.slice(0, 12).map((u, i) => ({
  ...u,
  region:
    i % 2 === 0
      ? 'Northeast–Mid-Atlantic Integrated Care Network — remote monitoring & transitional care (corridor 4-B)'
      : 'Southwest Rural Primary Care Collaborative — FQHC outreach & field nursing (Region VII)',
  department: DEPARTMENTS[i % DEPARTMENTS.length],
  program: PROGRAMS[i % PROGRAMS.length],
  site: SITES[i % SITES.length],
  priority: PRIORITIES[i % PRIORITIES.length],
  lane: i % 2 === 0 ? 'North' : 'South',
  tier: i % 2 === 0 ? 'Gold' : 'Silver',
  band: i % 2 === 0 ? 'A' : 'B',
}));

const statusAppearance = {
  Active: 'success',
  Inactive: 'default',
};

const buildViewportSchema = (isNarrow, showWideFilters) => {
  const cap = isNarrow ? COLUMN_CAP_NARROW : COLUMN_CAP_WIDE;
  const filterMax = isNarrow ? 260 : 320;
  const laneColumn = showWideFilters
    ? [
        {
          name: 'lane',
          displayName: 'Lane',
          width: isNarrow ? 96 : 120,
          minWidth: isNarrow ? 88 : 100,
          maxWidth: isNarrow ? cap : 200,
          sorting: true,
          filters: [
            { label: 'North', value: 'North' },
            { label: 'South', value: 'South' },
          ],
          filterOptions: WIDE_FILTER_OPTIONS,
          onFilterChange: (row, filters) => {
            for (let i = 0; i < filters.length; i += 1) {
              if (row.lane === filters[i]) return true;
            }
            return false;
          },
        },
      ]
    : [];
  const tierColumn = showWideFilters
    ? [
        {
          name: 'tier',
          displayName: 'Tier',
          width: isNarrow ? 96 : 120,
          minWidth: isNarrow ? 88 : 100,
          maxWidth: isNarrow ? cap : 200,
          sorting: true,
          filters: [
            { label: 'Gold', value: 'Gold' },
            { label: 'Silver', value: 'Silver' },
          ],
          filterOptions: WIDE_FILTER_OPTIONS,
          onFilterChange: (row, filters) => {
            for (let i = 0; i < filters.length; i += 1) {
              if (row.tier === filters[i]) return true;
            }
            return false;
          },
        },
      ]
    : [];
  const bandColumn = showWideFilters
    ? [
        {
          name: 'band',
          displayName: 'Band',
          width: isNarrow ? 88 : 112,
          minWidth: isNarrow ? 80 : 96,
          maxWidth: isNarrow ? cap : 200,
          sorting: true,
          filters: [
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
          ],
          filterOptions: MIDDLE_WIDE_FILTER_OPTIONS,
          onFilterChange: (row, filters) => {
            for (let i = 0; i < filters.length; i += 1) {
              if (row.band === filters[i]) return true;
            }
            return false;
          },
        },
      ]
    : [];
  return [
    {
      name: 'id',
      displayName: 'ID',
      width: isNarrow ? 48 : 72,
      minWidth: isNarrow ? 44 : 64,
      maxWidth: isNarrow ? 56 : 88,
      sorting: true,
      pinned: 'left',
    },
    {
      name: 'member',
      displayName: 'Member',
      width: isNarrow ? 200 : 260,
      minWidth: isNarrow ? 188 : 228,
      maxWidth: isNarrow ? cap : 320,
      sorting: true,
      cellType: 'AVATAR_WITH_TEXT',
      translate: (row) => ({
        title: `${row.firstName} ${row.lastName}`,
        firstName: row.firstName,
        lastName: row.lastName,
      }),
    },
    {
      name: 'email',
      displayName: 'Email',
      width: isNarrow ? 240 : 300,
      minWidth: isNarrow ? 220 : 260,
      maxWidth: isNarrow ? cap : 400,
      sorting: true,
      tooltip: true,
    },
    ...laneColumn,
    {
      name: 'department',
      displayName: 'Department',
      width: isNarrow ? 176 : 200,
      minWidth: isNarrow ? 160 : 176,
      maxWidth: isNarrow ? cap : 360,
      sorting: true,
      filters: DEPARTMENTS.map((label) => ({ label, value: label })),
      filterOptions: {
        minWidth: 160,
        maxWidth: filterMax,
        maxVisibleSelection: 4,
      },
      onFilterChange: (row, filters) => {
        for (let i = 0; i < filters.length; i += 1) {
          if (row.department === filters[i]) return true;
        }
        return false;
      },
    },
    {
      name: 'program',
      displayName: 'Program',
      width: isNarrow ? 88 : 104,
      minWidth: isNarrow ? 80 : 88,
      maxWidth: isNarrow ? 120 : 160,
      sorting: true,
      filters: PROGRAMS.map((label) => ({ label, value: label })),
      filterOptions: {
        minWidth: 120,
        maxWidth: filterMax,
        selectionType: 'singleSelect',
      },
      onFilterChange: (row, filters) => {
        for (let i = 0; i < filters.length; i += 1) {
          if (row.program === filters[i]) return true;
        }
        return false;
      },
    },
    {
      name: 'site',
      displayName: 'Site',
      width: isNarrow ? 96 : 104,
      minWidth: isNarrow ? 88 : 92,
      maxWidth: isNarrow ? 128 : 168,
      sorting: true,
      filters: SITES.map((label) => ({ label, value: label })),
      filterOptions: {
        minWidth: 120,
        maxWidth: filterMax,
        maxVisibleSelection: 4,
      },
      onFilterChange: (row, filters) => {
        for (let i = 0; i < filters.length; i += 1) {
          if (row.site === filters[i]) return true;
        }
        return false;
      },
    },
    {
      name: 'priority',
      displayName: 'Priority',
      width: isNarrow ? 64 : 72,
      minWidth: isNarrow ? 56 : 64,
      maxWidth: isNarrow ? 96 : 120,
      sorting: true,
      filters: PRIORITIES.map((label) => ({ label, value: label })),
      filterOptions: {
        minWidth: 100,
        maxWidth: filterMax,
        selectionType: 'singleSelect',
      },
      onFilterChange: (row, filters) => {
        for (let i = 0; i < filters.length; i += 1) {
          if (row.priority === filters[i]) return true;
        }
        return false;
      },
    },
    ...bandColumn,
    {
      name: 'role',
      displayName: 'Role',
      width: isNarrow ? 120 : 148,
      minWidth: isNarrow ? 108 : 120,
      maxWidth: isNarrow ? cap : 280,
      sorting: true,
      filters: [
        { label: 'Admin', value: 'Admin' },
        { label: 'User', value: 'User' },
      ],
      filterOptions: {
        minWidth: 160,
        maxWidth: filterMax,
        maxVisibleSelection: 4,
      },
      onFilterChange: (row, filters) => {
        for (let i = 0; i < filters.length; i += 1) {
          if (row.role === filters[i]) return true;
        }
        return false;
      },
    },
    {
      name: 'status',
      displayName: 'Status',
      width: isNarrow ? 108 : 124,
      minWidth: isNarrow ? 96 : 104,
      maxWidth: isNarrow ? cap : 200,
      cellType: 'STATUS_HINT',
      sorting: true,
      filters: [
        { label: 'Active', value: 'Active' },
        { label: 'Inactive', value: 'Inactive' },
      ],
      filterOptions: {
        minWidth: 140,
        maxWidth: filterMax,
        selectionType: 'singleSelect',
      },
      onFilterChange: (row, filters) => {
        for (let i = 0; i < filters.length; i += 1) {
          if (row.status === filters[i]) return true;
        }
        return false;
      },
      translate: (row) => {
        const status = row.status;
        const appearance = statusAppearance[status] || 'default';
        return {
          title: status,
          statusAppearance: appearance,
        };
      },
    },
    {
      name: 'region',
      displayName: 'Coverage region',
      width: isNarrow ? COLUMN_CAP_NARROW : 400,
      minWidth: isNarrow ? 260 : 320,
      maxWidth: isNarrow ? COLUMN_CAP_NARROW : COLUMN_CAP_WIDE,
      sorting: true,
      tooltip: true,
    },
    ...tierColumn,
    {
      name: 'actions',
      displayName: '',
      width: isNarrow ? 48 : 56,
      minWidth: isNarrow ? 44 : 52,
      maxWidth: isNarrow ? 56 : 64,
      sorting: false,
      pinned: 'right',
      cellRenderer: () => (
        <div className="d-flex align-items-center justify-content-end">
          <Menu trigger={<Menu.Trigger appearance="transparent" />}>
            <Menu.List>
              <Menu.Item>
                <Text>View…</Text>
              </Menu.Item>
              <Menu.Item>
                <Text>Assign…</Text>
              </Menu.Item>
            </Menu.List>
          </Menu>
        </div>
      ),
    },
  ];
};

export const responsiveness = () => {
  const [viewportPreset, setViewportPreset] = React.useState('320');
  const [showWideFilters, setShowWideFilters] = React.useState(false);
  const [showCreateNew, setShowCreateNew] = React.useState(false);

  const isNarrowSchema = viewportPreset === '320';

  const schema = React.useMemo(
    () => buildViewportSchema(isNarrowSchema, showWideFilters),
    [isNarrowSchema, showWideFilters]
  );
  const loaderSchema = React.useMemo(
    () => buildLoaderSchema(isNarrowSchema, showWideFilters),
    [isNarrowSchema, showWideFilters]
  );

  const selectionActionRenderer = () => (
    <div className="d-flex align-items-center">
      <Button size="tiny" className="mr-4">
        Delete
      </Button>
      <Button size="tiny">Export</Button>
    </div>
  );

  const globalActionRenderer = showCreateNew
    ? () => (
        <Button type="button" onClick={() => action('Create new')()}>
          Create new
        </Button>
      )
    : undefined;

  return (
    <div>
      <Flex direction="row" wrap="wrap" gap="spacing-40" className="mb-6 align-items-center">
        <Chip
          type="selection"
          name="viewport320"
          label="320 view"
          selected={viewportPreset === '320'}
          aria-label="Constrain table to 320px width (narrow column layout)"
          onClick={() => setViewportPreset((p) => (p === '320' ? 'full' : '320'))}
        />
        <Chip
          type="selection"
          name="viewport640"
          label="640 view"
          selected={viewportPreset === '640'}
          aria-label="Constrain table to 640px width (unselects 320 view)"
          onClick={() => setViewportPreset((p) => (p === '640' ? 'full' : '640'))}
        />
        <Chip
          type="selection"
          name="wideFilters"
          label="Wide filters"
          selected={showWideFilters}
          aria-label="Toggle 400px wide filter popovers on Lane and Tier columns"
          onClick={() => setShowWideFilters((v) => !v)}
        />
        <Chip
          type="selection"
          name="createNew"
          label="Create new"
          selected={showCreateNew}
          aria-label="Toggle Create new header action"
          onClick={() => setShowCreateNew((v) => !v)}
        />
      </Flex>
      <div
        style={{
          width: viewportPreset === '320' ? 320 : viewportPreset === '640' ? 640 : '100%',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <Card className="overflow-hidden vh-75">
          <Table
            aria-label="Responsive roster table with filters and pinned columns"
            loaderSchema={loaderSchema}
            data={responsivenessRows}
            schema={schema}
            type="data"
            size="compressed"
            separator={false}
            showMenu={true}
            draggable={true}
            withHeader={true}
            headerOptions={{
              withSearch: true,
              searchPlaceholder: 'Search by name, email, or role…',
              dynamicColumn: true,
              allowSelectAll: true,
              globalActionRenderer,
              selectionActionRenderer,
            }}
            filterPosition="HEADER"
            multipleSorting={true}
            sortingList={[]}
            withCheckbox={true}
            uniqueColumnName="id"
            withPagination={true}
            paginationType="jump"
            pageSize={5}
            pageJumpDebounceDuration={750}
            searchDebounceDuration={500}
            filterList={{}}
            onSearch={(currData, searchTerm) => {
              const t = searchTerm.toLowerCase();
              return currData.filter(
                (d) =>
                  d.firstName.toLowerCase().indexOf(t) !== -1 ||
                  d.lastName.toLowerCase().indexOf(t) !== -1 ||
                  d.email.toLowerCase().indexOf(t) !== -1 ||
                  d.role.toLowerCase().indexOf(t) !== -1
              );
            }}
          />
        </Card>
      </div>
    </div>
  );
};

const customCode = `
() => {
  var NARROW_COL_CAP = 300;
  var WIDE_COL_CAP = 560;
  var WIDE_FILTER_OPTIONS_LIVE = { minWidth: '400px', maxWidth: '480px' };
  var WIDE_MID_FILTER_OPTIONS_LIVE = { minWidth: '320px', maxWidth: '400px' };
  var data = ${JSON.stringify(responsivenessRows)};
  var departmentFilters = ${JSON.stringify(DEPARTMENTS.map((label) => ({ label, value: label })))};
  var programFilters = ${JSON.stringify(PROGRAMS.map((label) => ({ label, value: label })))};
  var siteFilters = ${JSON.stringify(SITES.map((label) => ({ label, value: label })))};
  var priorityFilters = ${JSON.stringify(PRIORITIES.map((label) => ({ label, value: label })))};

  var statusAppearance = {
    Active: 'success',
    Inactive: 'default',
  };

  function buildLoaderSchemaLive(narrow, showWide) {
    var laneOnly = showWide ? [{ name: 'lane', displayName: 'Lane', width: narrow ? 96 : 120 }] : [];
    var bandOnly = showWide ? [{ name: 'band', displayName: 'Band', width: narrow ? 88 : 112 }] : [];
    var tierOnly = showWide ? [{ name: 'tier', displayName: 'Tier', width: narrow ? 96 : 120 }] : [];
    return [
      { name: 'id', displayName: 'ID', width: narrow ? 48 : 72 },
      { name: 'member', displayName: 'Member', width: narrow ? 200 : 260 },
      { name: 'email', displayName: 'Email', width: narrow ? 240 : 300 },
    ].concat(laneOnly).concat([
      { name: 'department', displayName: 'Department', width: narrow ? 176 : 200 },
      { name: 'program', displayName: 'Program', width: narrow ? 88 : 104 },
      { name: 'site', displayName: 'Site', width: narrow ? 96 : 104 },
      { name: 'priority', displayName: 'Priority', width: narrow ? 64 : 72 },
    ]).concat(bandOnly).concat([
      { name: 'role', displayName: 'Role', width: narrow ? 120 : 148 },
      { name: 'status', displayName: 'Status', width: narrow ? 108 : 124 },
      { name: 'region', displayName: 'Coverage region', width: narrow ? NARROW_COL_CAP : 400 },
    ]).concat(tierOnly).concat([{ name: 'actions', displayName: '', width: narrow ? 48 : 56 }]);
  }

  function buildViewportSchemaLive(narrow, showWide) {
    var cap = narrow ? NARROW_COL_CAP : WIDE_COL_CAP;
    var filterMax = narrow ? 260 : 320;
    var laneColumn = showWide
      ? [
          {
            name: 'lane',
            displayName: 'Lane',
            width: narrow ? 96 : 120,
            minWidth: narrow ? 88 : 100,
            maxWidth: narrow ? cap : 200,
            sorting: true,
            filters: [
              { label: 'North', value: 'North' },
              { label: 'South', value: 'South' },
            ],
            filterOptions: WIDE_FILTER_OPTIONS_LIVE,
            onFilterChange: function (row, filters) {
              for (var ln = 0; ln < filters.length; ln += 1) {
                if (row.lane === filters[ln]) return true;
              }
              return false;
            },
          },
        ]
      : [];
    var tierColumn = showWide
      ? [
          {
            name: 'tier',
            displayName: 'Tier',
            width: narrow ? 96 : 120,
            minWidth: narrow ? 88 : 100,
            maxWidth: narrow ? cap : 200,
            sorting: true,
            filters: [
              { label: 'Gold', value: 'Gold' },
              { label: 'Silver', value: 'Silver' },
            ],
            filterOptions: WIDE_FILTER_OPTIONS_LIVE,
            onFilterChange: function (row, filters) {
              for (var tn = 0; tn < filters.length; tn += 1) {
                if (row.tier === filters[tn]) return true;
              }
              return false;
            },
          },
        ]
      : [];
    var bandColumn = showWide
      ? [
          {
            name: 'band',
            displayName: 'Band',
            width: narrow ? 88 : 112,
            minWidth: narrow ? 80 : 96,
            maxWidth: narrow ? cap : 200,
            sorting: true,
            filters: [
              { label: 'A', value: 'A' },
              { label: 'B', value: 'B' },
            ],
            filterOptions: WIDE_MID_FILTER_OPTIONS_LIVE,
            onFilterChange: function (row, filters) {
              for (var bn = 0; bn < filters.length; bn += 1) {
                if (row.band === filters[bn]) return true;
              }
              return false;
            },
          },
        ]
      : [];
    return []
      .concat([
      {
        name: 'id',
        displayName: 'ID',
        width: narrow ? 48 : 72,
        minWidth: narrow ? 44 : 64,
        maxWidth: narrow ? 56 : 88,
        sorting: true,
        pinned: 'left',
      },
      {
        name: 'member',
        displayName: 'Member',
        width: narrow ? 200 : 260,
        minWidth: narrow ? 188 : 228,
        maxWidth: narrow ? cap : 320,
        sorting: true,
        cellType: 'AVATAR_WITH_TEXT',
        translate: function (row) {
          return {
            title: row.firstName + ' ' + row.lastName,
            firstName: row.firstName,
            lastName: row.lastName,
          };
        },
      },
      {
        name: 'email',
        displayName: 'Email',
        width: narrow ? 240 : 300,
        minWidth: narrow ? 220 : 260,
        maxWidth: narrow ? cap : 400,
        sorting: true,
        tooltip: true,
      },
    ])
      .concat(laneColumn)
      .concat([
      {
        name: 'department',
        displayName: 'Department',
        width: narrow ? 176 : 200,
        minWidth: narrow ? 160 : 176,
        maxWidth: narrow ? cap : 360,
        sorting: true,
        filters: departmentFilters,
        filterOptions: {
          minWidth: 160,
          maxWidth: filterMax,
          maxVisibleSelection: 4,
        },
        onFilterChange: function (row, filters) {
          for (var d = 0; d < filters.length; d += 1) {
            if (row.department === filters[d]) return true;
          }
          return false;
        },
      },
      {
        name: 'program',
        displayName: 'Program',
        width: narrow ? 88 : 104,
        minWidth: narrow ? 80 : 88,
        maxWidth: narrow ? 120 : 160,
        sorting: true,
        filters: programFilters,
        filterOptions: {
          minWidth: 120,
          maxWidth: filterMax,
          selectionType: 'singleSelect',
        },
        onFilterChange: function (row, filters) {
          for (var p = 0; p < filters.length; p += 1) {
            if (row.program === filters[p]) return true;
          }
          return false;
        },
      },
      {
        name: 'site',
        displayName: 'Site',
        width: narrow ? 96 : 104,
        minWidth: narrow ? 88 : 92,
        maxWidth: narrow ? 128 : 168,
        sorting: true,
        filters: siteFilters,
        filterOptions: {
          minWidth: 120,
          maxWidth: filterMax,
          maxVisibleSelection: 4,
        },
        onFilterChange: function (row, filters) {
          for (var s = 0; s < filters.length; s += 1) {
            if (row.site === filters[s]) return true;
          }
          return false;
        },
      },
      {
        name: 'priority',
        displayName: 'Priority',
        width: narrow ? 64 : 72,
        minWidth: narrow ? 56 : 64,
        maxWidth: narrow ? 96 : 120,
        sorting: true,
        filters: priorityFilters,
        filterOptions: {
          minWidth: 100,
          maxWidth: filterMax,
          selectionType: 'singleSelect',
        },
        onFilterChange: function (row, filters) {
          for (var r = 0; r < filters.length; r += 1) {
            if (row.priority === filters[r]) return true;
          }
          return false;
        },
      },
    ])
      .concat(bandColumn)
      .concat([
      {
        name: 'role',
        displayName: 'Role',
        width: narrow ? 120 : 148,
        minWidth: narrow ? 108 : 120,
        maxWidth: narrow ? cap : 280,
        sorting: true,
        filters: [
          { label: 'Admin', value: 'Admin' },
          { label: 'User', value: 'User' },
        ],
        filterOptions: {
          minWidth: 160,
          maxWidth: filterMax,
          maxVisibleSelection: 4,
        },
        onFilterChange: function (row, filters) {
          for (var i = 0; i < filters.length; i += 1) {
            if (row.role === filters[i]) return true;
          }
          return false;
        },
      },
      {
        name: 'status',
        displayName: 'Status',
        width: narrow ? 108 : 124,
        minWidth: narrow ? 96 : 104,
        maxWidth: narrow ? cap : 200,
        cellType: 'STATUS_HINT',
        sorting: true,
        filters: [
          { label: 'Active', value: 'Active' },
          { label: 'Inactive', value: 'Inactive' },
        ],
        filterOptions: {
          minWidth: 140,
          maxWidth: filterMax,
          selectionType: 'singleSelect',
        },
        onFilterChange: function (row, filters) {
          for (var j = 0; j < filters.length; j += 1) {
            if (row.status === filters[j]) return true;
          }
          return false;
        },
        translate: function (row) {
          var status = row.status;
          var appearance = statusAppearance[status] || 'default';
          return {
            title: status,
            statusAppearance: appearance,
          };
        },
      },
      {
        name: 'region',
        displayName: 'Coverage region',
        width: narrow ? NARROW_COL_CAP : 400,
        minWidth: narrow ? 260 : 320,
        maxWidth: narrow ? NARROW_COL_CAP : WIDE_COL_CAP,
        sorting: true,
        tooltip: true,
      },
    ])
      .concat(tierColumn)
      .concat([
      {
        name: 'actions',
        displayName: '',
        width: narrow ? 48 : 56,
        minWidth: narrow ? 44 : 52,
        maxWidth: narrow ? 56 : 64,
        sorting: false,
        pinned: 'right',
        cellRenderer: function () {
          return (
            <div className="d-flex align-items-center justify-content-end">
              <Menu trigger={<Menu.Trigger appearance="transparent" />}>
                <Menu.List>
                  <Menu.Item>
                    <Text>View…</Text>
                  </Menu.Item>
                  <Menu.Item>
                    <Text>Assign…</Text>
                  </Menu.Item>
                </Menu.List>
              </Menu>
            </div>
          );
        },
      },
    ]);
  }

  const [viewportPreset, setViewportPreset] = React.useState('320');
  const [showWideFilters, setShowWideFilters] = React.useState(false);
  const [showCreateNew, setShowCreateNew] = React.useState(false);

  var isNarrowSchema = viewportPreset === '320';

  const loaderSchema = React.useMemo(function () {
    return buildLoaderSchemaLive(isNarrowSchema, showWideFilters);
  }, [isNarrowSchema, showWideFilters]);
  const schema = React.useMemo(function () {
    return buildViewportSchemaLive(isNarrowSchema, showWideFilters);
  }, [isNarrowSchema, showWideFilters]);

  const selectionActionRenderer = function () {
    return (
      <div className="d-flex align-items-center">
        <Button size="tiny" className="mr-4">
          Delete
        </Button>
        <Button size="tiny">Export</Button>
      </div>
    );
  };

  var globalActionRenderer = showCreateNew
    ? function () {
        return (
          <Button type="button" onClick={function () { action('Create new')(); }}>
            Create new
          </Button>
        );
      }
    : undefined;

  return (
    <div>
      <Flex direction="row" wrap="wrap" gap="spacing-40" className="mb-6 align-items-center">
        <Chip
          type="selection"
          name="viewport320"
          label="320 view"
          selected={viewportPreset === '320'}
          aria-label="Constrain table to 320px width (narrow column layout)"
          onClick={function () {
            setViewportPreset(function (p) {
              return p === '320' ? 'full' : '320';
            });
          }}
        />
        <Chip
          type="selection"
          name="viewport640"
          label="640 view"
          selected={viewportPreset === '640'}
          aria-label="Constrain table to 640px width (unselects 320 view)"
          onClick={function () {
            setViewportPreset(function (p) {
              return p === '640' ? 'full' : '640';
            });
          }}
        />
        <Chip
          type="selection"
          name="wideFilters"
          label="Wide filters"
          selected={showWideFilters}
          aria-label="Toggle 400px wide filter popovers on Lane and Tier columns"
          onClick={function () { setShowWideFilters(function (v) { return !v; }); }}
        />
        <Chip
          type="selection"
          name="createNew"
          label="Create new"
          selected={showCreateNew}
          aria-label="Toggle Create new header action"
          onClick={function () { setShowCreateNew(function (v) { return !v; }); }}
        />
      </Flex>
      <div
        style={{
          width: viewportPreset === '320' ? 320 : viewportPreset === '640' ? 640 : '100%',
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxSizing: 'border-box',
        }}
      >
        <Card className="overflow-hidden vh-75">
          <Table
            aria-label="Responsive roster table with filters and pinned columns"
            loaderSchema={loaderSchema}
            data={data}
            schema={schema}
            type="data"
            size="compressed"
            separator={false}
            showMenu={true}
            draggable={true}
            withHeader={true}
            headerOptions={{
              withSearch: true,
              searchPlaceholder: 'Search by name, email, or role…',
              dynamicColumn: true,
              allowSelectAll: true,
              globalActionRenderer: globalActionRenderer,
              selectionActionRenderer: selectionActionRenderer,
            }}
            filterPosition="HEADER"
            multipleSorting={true}
            sortingList={[]}
            withCheckbox={true}
            uniqueColumnName="id"
            withPagination={true}
            paginationType="jump"
            pageSize={5}
            pageJumpDebounceDuration={750}
            searchDebounceDuration={500}
            filterList={{}}
            onSearch={function (currData, searchTerm) {
              var t = searchTerm.toLowerCase();
              return currData.filter(function (d) {
                return (
                  d.firstName.toLowerCase().indexOf(t) !== -1 ||
                  d.lastName.toLowerCase().indexOf(t) !== -1 ||
                  d.email.toLowerCase().indexOf(t) !== -1 ||
                  d.role.toLowerCase().indexOf(t) !== -1
                );
              });
            }}
          />
        </Card>
      </div>
    </div>
  );
};
`;

export default {
  title: 'Components/Table/Responsiveness',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Table responsiveness',
        props: {
          components: { AsyncTable, SyncTable, Chip, Flex, Button, action },
        },
      },
    },
  },
};
