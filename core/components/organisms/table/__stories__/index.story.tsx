import * as React from 'react';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import { boolean, select, number } from '@storybook/addon-knobs';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { fetchData } from '@/components/organisms/grid/__stories__/_common_/fetchData';
import { action } from '@storybook/addon-actions';
import { Card, Table, List } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';
import { NestedRowProps } from '../../grid/GridNestedRow';
import { nestedRowRenderer } from '../../grid/__stories__/_common_/nestedRowRenderer';
import { errorTemplate } from '../../grid/__stories__/_common_/errorTemplate';

export const all = () => {
  const async = boolean(
    'async',
    false
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

  const nestedRows = boolean(
    'nestedRows',
    false
  );

  const withHeader = boolean(
    'withHeader',
    true
  );

  const withCheckbox = boolean(
    'withCheckbox',
    false
  );

  const showMenu = boolean(
    'showMenu',
    true
  );

  const withPagination = boolean(
    'withPagination',
    false
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

  const headCellTooltip = boolean(
    'headCellTooltip',
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
      }}
    >
      <Card className="h-100">
        <Table
          key={`${async}`}
          {...dataAttr}
          loading={loading}
          error={error}
          errorTemplate={errorTemplate}
          withHeader={withHeader}
          headerOptions={{
            withSearch: true,
          }}
          withCheckbox={withCheckbox}
          showMenu={showMenu}
          type={type}
          size={size}
          headCellTooltip={headCellTooltip}
          draggable={draggable}
          nestedRows={nestedRows}
          nestedRowRenderer={nestedRowRenderer}
          withPagination={withPagination}
          paginationType={paginationType}
          pageSize={pageSize}
          loaderSchema={applyLoaderSchema ? loaderSchema : undefined}
          onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
          onSelect={(rowIndex, selected, selectedList, selectAll) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(selectedList)} selectAll: ${selectAll}`)()}
          onPageChange={newPage => action(`on-page-change:- ${newPage}`)()}
          onSearch={(currData, searchTerm) => {
            action(`on-search:- currData: ${JSON.stringify(currData)}, searchTerm: ${searchTerm}`)();
            return currData;
          }}
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
          exclude: ['showHead'],
        },
        noStory: true,
      }
    }
  }
};
