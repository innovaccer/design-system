import * as React from 'react';
import { Card, Grid, GridCell } from '@/index';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { action } from '@/utils/action';
import { getSelectAll } from '@/components/organisms/grid/utility';

export const disabledCheckbox = () => {
  const initialData = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      email: 'brooke.heeran@example.com',
      gender: 'Female',
      locked: true, // This row's checkbox will be disabled
      _selected: false,
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'frazer.cathro@example.com',
      gender: 'Male',
      locked: false,
      _selected: false,
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: 'lemmie.ciric@example.com',
      gender: 'Male',
      locked: true, // This row's checkbox will be disabled
      _selected: false,
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'randy.boatwright@example.com',
      gender: 'Male',
      locked: false,
      _selected: false,
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rolando.cyples@example.com',
      gender: 'Male',
      locked: false,
      _selected: false,
    },
  ];

  const [data, setData] = React.useState(initialData);
  const isCheckboxDisabled = (rowData) => rowData.locked === true;

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
      translate: (a) => ({
        title: `${a.firstName} ${a.lastName}`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      cellType: 'WITH_META_LIST',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      cellType: 'STATUS_HINT',
      translate: (a) => ({
        title: a.gender,
        statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
      }),
    },
  ];

  const handleSelect = (rowIndex, selected) => {
    action(`on-select:- rowIndex: ${rowIndex} selected: ${selected}`)();

    // Skip if checkbox is disabled for this row
    if (isCheckboxDisabled && isCheckboxDisabled(data[rowIndex])) {
      return;
    }

    setData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex] = { ...newData[rowIndex], _selected: selected };
      return newData;
    });
  };

  const handleSelectAll = (selected, selectAll) => {
    action(`on-select:- selected: ${selected} selectAll: ${selectAll}`)();

    setData((prevData) => {
      // Filter out rows with disabled checkboxes
      const selectableIndexes = prevData
        .map((row, index) => (!isCheckboxDisabled || !isCheckboxDisabled(row) ? index : -1))
        .filter((index) => index !== -1);

      const newData = prevData.map((row, index) => {
        if (selectableIndexes.includes(index)) {
          return { ...row, _selected: selected };
        }
        return row;
      });
      return newData;
    });
  };

  const selectAll = getSelectAll(data, false, false, isCheckboxDisabled);

  return (
    <div className="Grid-outerWrapper">
      <Card className="h-100 overflow-hidden">
        <Grid
          schema={schema}
          data={data}
          loading={false}
          error={false}
          totalRecords={data.length}
          withCheckbox={true}
          showMenu={true}
          type="data"
          size="standard"
          headCellTooltip={false}
          separator={false}
          draggable={true}
          nestedRows={false}
          withPagination={false}
          page={1}
          pageSize={12}
          loaderSchema={loaderSchema}
          isCheckboxDisabled={isCheckboxDisabled}
          selectAll={selectAll}
          onRowClick={(rowData, rowIndex) =>
            action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
          }
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          sortingList={[]}
          filterList={{}}
        />
      </Card>
    </div>
  );
};

const customCode = `() => {
  const initialData = [
    {
      firstName: 'Brooke',
      lastName: 'Heeran',
      email: 'brooke.heeran@example.com',
      gender: 'Female',
      locked: true, // This row's checkbox will be disabled
      _selected: false,
    },
    {
      firstName: 'Frazer',
      lastName: 'Cathro',
      email: 'frazer.cathro@example.com',
      gender: 'Male',
      locked: false,
      _selected: false,
    },
    {
      firstName: 'Lemmie',
      lastName: 'Ciric',
      email: 'lemmie.ciric@example.com',
      gender: 'Male',
      locked: true, // This row's checkbox will be disabled
      _selected: false,
    },
    {
      firstName: 'Randy',
      lastName: 'Boatwright',
      email: 'randy.boatwright@example.com',
      gender: 'Male',
      locked: false,
      _selected: false,
    },
    {
      firstName: 'Rolando',
      lastName: 'Cyples',
      email: 'rolando.cyples@example.com',
      gender: 'Male',
      locked: false,
      _selected: false,
    },
  ];

  const [data, setData] = React.useState(initialData);
  const isCheckboxDisabled = (rowData) => rowData.locked === true;

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
      translate: (a) => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName,
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      cellType: 'WITH_META_LIST',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      cellType: 'STATUS_HINT',
      translate: (a) => ({
        title: a.gender,
        statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
      }),
    },
  ];

  const handleSelect = (rowIndex, selected) => {
    console.log(\`on-select:- rowIndex: \${rowIndex} selected: \${selected}\`);
    
    // Skip if checkbox is disabled for this row
    if (isCheckboxDisabled && isCheckboxDisabled(data[rowIndex])) {
      return;
    }

    setData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex] = { ...newData[rowIndex], _selected: selected };
      return newData;
    });
  };

  const handleSelectAll = (selected, selectAll) => {
    console.log(\`on-select:- selected: \${selected} selectAll: \${selectAll}\`);

    setData((prevData) => {
      // Filter out rows with disabled checkboxes
      const selectableIndexes = prevData
        .map((row, index) => (!isCheckboxDisabled || !isCheckboxDisabled(row) ? index : -1))
        .filter((index) => index !== -1);

      const newData = prevData.map((row, index) => {
        if (selectableIndexes.includes(index)) {
          return { ...row, _selected: selected };
        }
        return row;
      });
      return newData;
    });
  };

  const loaderSchema = ${JSON.stringify(loaderSchema, null, 4)};
  
  // Calculate selectAll state
  const selectableData = data.filter((d) => !isCheckboxDisabled || !isCheckboxDisabled(d));
  const anyUnSelected = selectableData.some((d) => !d._selected);
  const allUnSelected = selectableData.every((d) => !d._selected);
  const selectAll = {
    indeterminate: selectableData.length > 0 && anyUnSelected && !allUnSelected,
    checked: !anyUnSelected && !allUnSelected && selectableData.length > 0,
  };

  return (
    <div className="Grid-outerWrapper">
      <Card className="h-100 overflow-hidden">
        <Grid
          schema={schema}
          data={data}
          loading={false}
          error={false}
          totalRecords={data.length}
          withCheckbox={true}
          showMenu={true}
          type="data"
          size="standard"
          headCellTooltip={false}
          separator={false}
          draggable={true}
          nestedRows={false}
          withPagination={false}
          page={1}
          pageSize={12}
          loaderSchema={loaderSchema}
          isCheckboxDisabled={isCheckboxDisabled}
          selectAll={selectAll}
          onRowClick={(rowData, rowIndex) =>
            console.log(\`on-row-click:- rowIndex: \${rowIndex} data: \${JSON.stringify(rowData)}\`)
          }
          onSelect={handleSelect}
          onSelectAll={handleSelectAll}
          sortingList={[]}
          filterList={{}}
        />
      </Card>
    </div>
  );
}`;

export default {
  title: 'Components/Grid/Disabled Checkbox',
  component: Grid,
  subcomponents: { GridCell },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Disabled Checkbox in Grid',
        description:
          'Use `isCheckboxDisabled` prop to disable checkboxes for specific rows based on row data. The checkbox will be visually disabled and cannot be selected, but row actions (like clicking the row) will continue to work normally.',
      },
    },
  },
};
