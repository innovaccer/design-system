import * as React from 'react';
import { Icon, GridCell } from '@/index';
import { ColumnSchema } from '../../../grid';

const schema: ColumnSchema[] = [
  {
    name: 'name',
    displayName: 'Name',
    width: '40%',
    resizable: true,
    tooltip: true,
    // pinned: 'left',
    separator: true,
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
    // comparator: (a, b) => (
    //   a.lastName.localeCompare(b.lastName) && a.firstName.localeCompare(b.firstName)
    // ),
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
    // cellType: 'AVATAR'
    cellType: 'AVATAR_WITH_TEXT',
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 250,
    resizable: true,
    sorting: false,
    // separator: true,
    // pinned: 'left',
    // align: 'center',
    // comparator: (a, b) => a.email.title.localeCompare(b.email.title),
    cellType: 'WITH_META_LIST',
    // image: iconImg,
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 180,
    resizable: true,
    // separator: true,
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
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    resizable: true,
    // pinned: 'right',
    // separator: true,
    cellType: 'WITH_META_LIST',
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
    // status: "success"
  },
];

export default schema;
