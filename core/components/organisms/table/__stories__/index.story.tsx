import * as React from 'react';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import { boolean, select, number } from '@storybook/addon-knobs';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { fetchData } from '@/components/organisms/grid/__stories__/_common_/fetchData';
import { action } from '@storybook/addon-actions';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';

export const all = () => {
  const async = boolean(
    'async',
    true
  );

  let loading;
  let error;
  let applyData;
  let applySchema;
  const applyLoaderSchema = boolean(
    'applyLoaderSchema',
    true
  );

  if (!async) {
    loading = boolean(
      'loading',
      false
    );

    error = boolean(
      'error',
      false
    );

    applySchema = boolean(
      'applySchema',
      true
    );

    applyData = boolean(
      'applyData',
      true
    );
  }

  const type = select(
    'type',
    ['resource', 'data'],
    'resource'
  );

  const size = select(
    'size',
    ['comfortable', 'standard', 'compressed', 'tight'],
    'comfortable'
  );

  const draggable = boolean(
    'draggable',
    true
  );

  const withHeader = boolean(
    'withHeader',
    true
  );

  const withCheckbox = boolean(
    'withCheckbox',
    true
  );

  const showMenu = boolean(
    'showMenu',
    true
  );

  const withPagination = boolean(
    'withPagination',
    true
  );

  const paginationType = select(
    'paginationType',
    ['basic', 'jump'],
    'jump'
  );

  const pageSize = number(
    'pageSize',
    12
  );

  const multipleSorting = boolean(
    'multipleSorting',
    false
  );

  let dataAttr = {};
  if (async) {
    dataAttr = {
      fetchData,
    };
  } else {
    dataAttr = {
      loading,
      error,
      schema: applySchema ? schema : [],
      data: applyData ? data : [],
    };
  }

  return (
    <div
      style={{
        height: '350px',
        // overflow: 'hidden'
      }}
    >
      <Card className="h-100">
        <Table
          key={`${async}`}
          {...dataAttr}
          loading={loading}
          error={error}
          withHeader={withHeader}
          headerOptions={{
            withSearch: true,
          }}
          withCheckbox={withCheckbox}
          showMenu={showMenu}
          type={type}
          size={size}
          draggable={draggable}
          withPagination={withPagination}
          paginationType={paginationType}
          pageSize={pageSize}
          loaderSchema={applyLoaderSchema ? loaderSchema : undefined}
          onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
          onSelect={(rowIndex, selected, selectedList, selectAll) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)()}
          onPageChange={newPage => action(`on-page-change:- ${newPage}`)()}
          multipleSorting={multipleSorting}
          sortingList={[
            { name: 'name', type: 'desc' }
          ]}
          filterList={{
            name: ['h-r', 's-z']
          }}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Organisms|Table',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead']
        }
      }
    }
  }
};
