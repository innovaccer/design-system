import * as React from 'react';
import { Icon, GridCell } from '@/index';
import { ColumnSchema } from '../../../Grid';

const schema: ColumnSchema[] = [
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
    translate: (a) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.lastName,
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
    cellType: 'WITH_META_LIST',
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: '15%',
    resizable: true,
    comparator: (a, b) => a.gender.localeCompare(b.gender),
    cellType: 'STATUS_HINT',
    translate: (a) => ({
      title: a.gender,
      statusAppearance: a.gender === 'Female' ? 'alert' : 'success',
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
    translate: () => ({
      icon: 'events',
    }),
  },
  {
    name: 'customCell',
    displayName: 'Custom Cell',
    width: '20%',
    resizable: true,
    cellType: 'WITH_META_LIST',
    sorting: false,
    cellRenderer: (props) => {
      return (
        <>
          <Icon className="mr-5" name="events" />
          <GridCell
            {...props}
            schema={{
              ...props.schema,
              name: 'email',
            }}
          />
        </>
      );
    },
  },
];

export default schema;
