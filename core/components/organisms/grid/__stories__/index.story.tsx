import * as React from 'react';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import { boolean, select, number } from '@storybook/addon-knobs';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { action } from '@storybook/addon-actions';
import { Card, Grid } from '@/index';
import { nestedRowRenderer } from '../../grid/__stories__/_common_/nestedRowRenderer';
import { errorTemplate } from '../../grid/__stories__/_common_/errorTemplate';

export const all = () => {
  const applyLoaderSchema = boolean(
    'applyLoaderSchema',
    true
  );

  const loading = boolean(
    'loading',
    false
  );

  const error = boolean(
    'error',
    false
  );

  const applySchema = boolean(
    'applySchema',
    true
  );

  const applyData = boolean(
    'applyData',
    true
  );

  const totalRecords = number(
    'totalRecords',
    data.length
  );

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

  const page = number(
    'page',
    1
  );

  const pageSize = number(
    'pageSize',
    12
  );

  const headCellTooltip = boolean(
    'headCellTooltip',
    false
  );

  const separator = boolean(
    'separator',
    false
  );

  return (
    <div
      style={{
        height: '350px',
      }}
    >
      <Card className="h-100">
        <Grid
          schema={applySchema ? schema : undefined}
          data={applyData ? data : undefined}
          loading={loading}
          error={error}
          errorTemplate={errorTemplate}
          totalRecords={totalRecords}
          withCheckbox={withCheckbox}
          showMenu={showMenu}
          type={type}
          size={size}
          headCellTooltip={headCellTooltip}
          separator={separator}
          draggable={draggable}
          nestedRows={nestedRows}
          nestedRowRenderer={nestedRowRenderer}
          withPagination={withPagination}
          page={page}
          pageSize={pageSize}
          loaderSchema={applyLoaderSchema ? loaderSchema : undefined}
          onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
          onSelect={(rowIndex, selected) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected}`)()}
          onSelectAll={(selected, selectedAll) => {
            action(`on-select:- selected: ${selected} selectedAll: ${selectedAll}`)();
          }}
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
  title: 'Organisms|Grid',
  component: Grid,
  parameters: {
    docs: {
      docPage: {
        noStory: true,
      }
    }
  }
};
