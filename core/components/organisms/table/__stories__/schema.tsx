import * as React from 'react';
import { Data, CellSchema } from '../Table';
// @ts-ignore
import iconImg from './image.png';
import { TableCellProps } from '../TableCell';
import { Button } from '@/index';

const schema: CellSchema[] = [
  {
    name: 'name',
    displayName: 'Name',
    width: 300,
    resize: true,
    // pinned: true,
    translate: (a: Data) => ({
      title: `${a.firstName} ${a.lastName}`,
      firstName: a.firstName,
      lastName: a.firstName
    }),
    filters: [
      { label: 'A-G', value: 'a-g' },
      { label: 'H-R', value: 'h-r' },
      { label: 'S-Z', value: 's-z' },
    ],
    sortFn: (a: Data, b: Data) => (
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
    avatar: true
  },
  {
    name: 'email',
    displayName: 'Email',
    width: 350,
    resize: true,
    align: 'center',
    // separator: true,
    // pinned: true,
    sortFn: (a: Data, b: Data) => a.email.localeCompare(b.email),
    image: iconImg,
    // image: "events",
  },
  {
    name: 'gender',
    displayName: 'Gender',
    width: 200,
    resize: true,
    // separator: true,
    sortFn: (a: Data, b: Data) => a.gender.localeCompare(b.gender),
    status: true
  },
  {
    name: 'icon',
    displayName: 'Icon',
    width: 100,
    resize: true,
    icon: 'events',
    // separator: true,
    // status: "success"
  },
  {
    name: 'customCell',
    displayName: 'Custom Cell',
    width: 200,
    resize: true,
    separator: true,
    cellTemplate: (props: TableCellProps) => {
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
