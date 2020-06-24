import * as React from 'react';
import { Schema } from '../../Grid';
// @ts-ignore
import iconImg from './image.png';
import { GridCellProps } from '../../GridCell';
import { Button } from '@/index';

const schema: Schema = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    resizable: true,
    // pinned: true,
    separator: {
      head: true
    },
    translate: a => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.firstName
    }),
    filters: [
      { label: 'A-G', value: 'a-g' },
      { label: 'H-R', value: 'h-r' },
      { label: 'S-Z', value: 's-z' },
    ],
    sortFn: (a, b) => (
      a.lastName.localeCompare(b.lastName) && a.firstName.localeCompare(b.firstName)
    ),
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
    width: 350,
    resizable: true,
    // separator: true,
    // pinned: true,
    // align: 'center',
    sortFn: (a, b) => a.email.title.localeCompare(b.email.title),
    cellType: 'WITH_META_LIST'
    // image: iconImg,
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 200,
    resizable: true,
    // separator: true,
    sortFn: (a, b) => a.gender.localeCompare(b.gender),
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
    width: 100,
    resizable: true,
    align: 'center',
    cellType: 'ICON',
    translate: _ => ({
      icon: 'events'
    })
    // separator: true,
    // status: "success"
  },
  {
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    resizable: true,
    separator: {
      head: true,
      body: true
    },
    cellRenderer: (props: GridCellProps) => {
      const {
        loading
      } = props;

      if (loading) return <></>;

      return (
        <Button appearance={'primary'}>Button</Button>
      );
    }
    // status: "success"
  },
];

export default schema;
