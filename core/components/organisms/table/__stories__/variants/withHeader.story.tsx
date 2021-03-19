import * as React from 'react';
import { Card, Table } from '@/index';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { action } from '@storybook/addon-actions';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

export const withHeader = () => {
  return (
    <div
      style={{
        height: '350px',
      }}
    >
      <Card
        shadow="light"
        className="h-100"
      >
        <Table
          data={data}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          showHead={false}
          draggable={true}
          withPagination={true}
          onSelect={(rowIndex, selected, selectedList, selectAll) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)()}
          onPageChange={newPage => action(`on-page-change:- ${newPage}`)()}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Table/Variants'
};
