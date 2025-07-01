import * as React from 'react';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { action } from '@/utils/action';
import { Card, Grid, GridCell } from '@/index';
import { nestedRowRenderer } from '../../grid/__stories__/_common_/nestedRowRenderer';
import { errorTemplate } from '../../grid/__stories__/_common_/errorTemplate';
import './style.css';

export const All = () => {
  const applyLoaderSchema = true;

  const loading = false;

  const error = false;

  const applySchema = true;

  const applyData = true;

  const totalRecords = data.length;

  const type = 'resource';

  const size = 'comfortable';

  const draggable = true;

  const nestedRows = false;

  const withCheckbox = false;

  const showMenu = true;

  const withPagination = false;

  const page = 1;

  const pageSize = 12;

  const headCellTooltip = false;

  const separator = false;

  return (
    <div className="Grid-outerWrapper">
      <Card className="h-100 overflow-hidden">
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
          onRowClick={(rowData, rowIndex) =>
            action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
          }
          onSelect={(rowIndex, selected) => action(`on-select:- rowIndex: ${rowIndex} selected: ${selected}`)()}
          onSelectAll={(selected, selectedAll) => {
            action(`on-select:- selected: ${selected} selectedAll: ${selectedAll}`)();
          }}
          sortingList={[{ name: 'name', type: 'desc' }]}
          filterList={{
            name: ['h-r', 's-z'],
          }}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Grid/All',
  component: Grid,
  subcomponents: { GridCell },
  parameters: {
    docs: {
      docPage: {
        noStory: true,
      },
    },
  },
};
