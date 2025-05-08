import React from 'react';
import { Table } from '@/index';
import { TableProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Table, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=2088-14395', {
  imports: ["import { Table } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Spacing', {
      Standard: 'standard',
      Compressed: 'compressed',
      Tight: 'tight',
    }),
  },
  example: (props) => (
    <Table
      {...(props as TableProps)}
      type="resource"
      schema={[
        {
          name: 'firstName',
          displayName: 'Name',
          cellType: 'AVATAR_WITH_TEXT',
          width: '25%',
        },
        {
          name: 'email',
          displayName: 'Email',
          width: '25%',
        },
        {
          name: 'gender',
          displayName: 'Gender',
          width: '25%',
        },
        {
          name: 'status',
          displayName: 'Status',
          width: '25%',
        },
      ]}
      data={[
        {
          firstName: 'Brooke',
          lastName: 'Heeran',
          email: 'bheeran0@altervista.org',
          gender: 'Female',
          status: 'Failed',
        },
        {
          firstName: 'Frazer',
          lastName: 'Cathro',
          email: 'fcathro1@ucla.edu',
          gender: 'Male',
          status: 'Failed',
        },
        {
          firstName: 'Lemmie',
          lastName: 'Ciric',
          email: {
            title: 'lciric2@dmoz.org',
            metaList: ['First', 'Second'],
          },
          gender: 'Male',
          status: 'Completed',
        },
        {
          firstName: 'Randy',
          lastName: 'Boatwright',
          email: 'rboatwright3@arstechnica.com',
          status: 'Completed',
          gender: 'Male',
        },
      ]}
    />
  ),
});

figma.connect(Table, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=2008-23997', {
  imports: ["import { Table } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Spacing', {
      Standard: 'standard',
      Compressed: 'compressed',
      Tight: 'tight',
    }),
  },
  example: (props) => (
    <Table
      {...(props as TableProps)}
      type="data"
      schema={[
        {
          name: 'firstName',
          displayName: 'Name',
          cellType: 'AVATAR_WITH_TEXT',
          width: '25%',
        },
        {
          name: 'email',
          displayName: 'Email',
          width: '25%',
        },
        {
          name: 'gender',
          displayName: 'Gender',
          width: '25%',
        },
        {
          name: 'status',
          displayName: 'Status',
          width: '25%',
        },
      ]}
      data={[
        {
          firstName: 'Brooke',
          lastName: 'Heeran',
          email: 'bheeran0@altervista.org',
          gender: 'Female',
          status: 'Failed',
        },
        {
          firstName: 'Frazer',
          lastName: 'Cathro',
          email: 'fcathro1@ucla.edu',
          gender: 'Male',
          status: 'Failed',
        },
        {
          firstName: 'Lemmie',
          lastName: 'Ciric',
          email: {
            title: 'lciric2@dmoz.org',
            metaList: ['First', 'Second'],
          },
          gender: 'Male',
          status: 'Completed',
        },
        {
          firstName: 'Randy',
          lastName: 'Boatwright',
          email: 'rboatwright3@arstechnica.com',
          status: 'Completed',
          gender: 'Male',
        },
      ]}
    />
  ),
});
