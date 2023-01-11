import * as React from 'react';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';
import { fetchData } from '@/components/organisms/grid/__stories__/_common_/fetchData';
import { action } from '@/utils/action';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';
import { nestedRowRenderer } from '../../grid/__stories__/_common_/nestedRowRenderer';
import { errorTemplate } from '../../grid/__stories__/_common_/errorTemplate';

export const all = () => {
  const async = false;

  let loading;
  let error;
  let applyData;
  let applySchema;
  const applyLoaderSchema = true;

  if (!async) {
    loading = false;

    error = false;

    applySchema = true;

    applyData = true;
  }

  const type = 'resource';

  const size = 'comfortable';

  const draggable = true;

  const nestedRows = false;

  const withHeader = true;

  const withCheckbox = false;

  const showMenu = true;

  const withPagination = false;

  const page = 1;

  const paginationType = 'jump';

  const pageSize = 12;

  const multipleSorting = false;

  const headCellTooltip = false;

  const separator = false;

  const filterPosition = 'HEADER';

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
    <div className="vh-75">
      <Card className="h-100 overflow-hidden">
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
          separator={separator}
          draggable={draggable}
          nestedRows={nestedRows}
          nestedRowRenderer={nestedRowRenderer}
          withPagination={withPagination}
          page={page}
          paginationType={paginationType}
          pageSize={pageSize}
          loaderSchema={applyLoaderSchema ? loaderSchema : undefined}
          onRowClick={(rowData, rowIndex) =>
            action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
          }
          onSelect={(rowIndex, selected, selectedList, selectAll) =>
            action(
              `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                selectedList
              )} selectAll: ${selectAll}`
            )()
          }
          onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
          onSearch={(currData, searchTerm) => {
            action(`on-search:- currData: ${JSON.stringify(currData)}, searchTerm: ${searchTerm}`)();
            return currData;
          }}
          multipleSorting={multipleSorting}
          sortingList={[{ name: 'name', type: 'desc' }]}
          filterList={{
            name: ['h-r', 's-z'],
          }}
          filterPosition={filterPosition}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Table/All',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
        noStory: true,
      },
    },
  },
};
