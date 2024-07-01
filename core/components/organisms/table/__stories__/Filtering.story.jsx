import * as React from 'react';
import { AsyncTable, SyncTable } from './_common_/types';
import { Table } from '@/index';

export const filtering = () => {
  return <></>;
};

export default {
  title: 'Components/Table/Filtering',
  component: Table,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    docs: {
      docPage: {
        noProps: true,
        noStory: true,
        sandboxTitle: 'async-table-filters-pattern-z56dp6?file=/src/MainTable.js',
        title: 'Async Table With Filters',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
