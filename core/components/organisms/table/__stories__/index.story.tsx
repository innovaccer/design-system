import * as React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Grid from '../Grid';
import { ISchema, IGridActions, ILoaderSchema } from '../interfaces';
import { updateKnob } from '@/utils/storybookEventEmitter';
import Checkbox from '@/components/atoms/checkbox';
import Avatar, { Appearance } from '@/components/atoms/avatar';
import Button from '@/components/atoms/button';
import userData from './users';

type SimpleObject = Record<string, any>;
const appearance: Appearance[] = ['primary', 'success', 'alert', 'warning'];
let limit = 1;
let data: SimpleObject[] = [];
let gridActions: IGridActions;

const getData = () => {
  const { users } = userData;
  for (let i = 0; i < limit; i++) {
    data = [...data, ...users];
  }

  return data;
};

const getSchema = (index: number) => {
  const { schema } = userData;
  return schema[index];
};

const loadMore = () => {
  action('load more data')();
  setTimeout(() => {
    limit++;
    updateKnob('loadingMoreData', true);
  }, 2500);
};

const getGridActions = (gActions?: IGridActions) => {
  action('get grid actions')();
  if (gActions) gridActions = gActions;
};

export const all = () => {
  const loading = boolean(
    'loading',
    false
  );

  const loadingMoreData = boolean(
    'loadingMoreData',
    false
  );

  const dynamicRowHeight = boolean(
    'dynamicRowHeight',
    false
  );

  const virtualization = boolean(
    'virtualization',
    true
  );

  const pinned = boolean(
    'pinned',
    true
  );

  const buffer = number(
    'buffer',
    5
  );

  const rowHeight = number(
    'rowHeight',
    50
  );

  const headerHeight = number(
    'headerHeight',
    40
  );

  const [allChecked, setAllChecked] = React.useState(false);

  const loaderSchema: ILoaderSchema[] = [
    {
      width: 50,
      round: true,
      withImage: false,
      pinned: pinned ? 'LEFT' : undefined,
    },
    {
      round: false,
      withImage: false,
      pinned: pinned ? 'LEFT' : undefined,
    },
    {
      width: 200,
      round: true,
      pinned: pinned ? 'LEFT' : undefined,
    },
    {
      width: 200,
    },
    {
      width: 200,
      round: true,
    },
    {
      width: 200,
      round: false,
      withImage: false,
    },
  ];

  const schema: ISchema[] = [
    {
      width: 50,
      template: ({ checked }: SimpleObject) => {
        return (
          <div className="cell-wrapper">
            <Checkbox
              checked={checked || allChecked}
            />
          </div>
        );
      },
      pinned: pinned ? 'LEFT' : undefined,
      get: ({ checked }: SimpleObject) => ({
        checked,
      }),
      header: () => {
        return (
          <div className="cell-wrapper">
            <Checkbox
              checked={allChecked}
              onChange={(checked: boolean) => {
                setAllChecked(checked);
              }}
            />
          </div>
        );
      },
      name: '',
      displayName: '',
    },
    {
      pinned: pinned ? 'LEFT' : undefined,
      template: ({ x, rowIndex }: SimpleObject) => (
        <div className="image-wrapper">
          <Avatar
            appearance={appearance[rowIndex % appearance.length]}
          >
            {x}
          </Avatar>
        </div>
      ),
      get: ({ firstName, lastName }: SimpleObject) => ({
        x: firstName[0] + lastName[0],
      }),
      header: () => <div/>,
      name: '',
      displayName: '',
    },
    {
      width: 200,
      template: (row: SimpleObject) => (
        <div className="cell-wrapper">
          {row.firstName} {row.lastName}
        </div>
      ),
      pinned: pinned ? 'LEFT' : undefined,
      get: ({ firstName, lastName }: SimpleObject) => ({
        firstName,
        lastName,
      }),
      name: getSchema(0).name,
      displayName: getSchema(0).display_name,
    },
    {
      width: 200,
      name: getSchema(1).name,
      displayName: getSchema(1).display_name,
    },
    {
      width: 200,
      template: (props: SimpleObject) => (
        <div className="cell-wrapper ellipsis">{props[getSchema(2).name]}</div>
      ),
      name: getSchema(2).name,
      displayName: getSchema(2).display_name,
    },
    {
      width: 200,
      template: ({ rowIndex }: SimpleObject) => (
        <div
          className={'cell-wrapper'}
        >
          {rowIndex}
          {dynamicRowHeight && (
            <Button
              icon="edit"
            />
          )}
        </div>
      ),
      name: getSchema(3).name,
      displayName: getSchema(3).display_name,
    },
  ];

  if (gridActions) {
    // @ts-ignore
    gridActions.refreshRows([Array(data.length).keys()]);
  }

  return (
    <Grid
      style={{
        maxHeight: '300px',
        maxWidth: 1200,
      }}
      loadMore={loadMore}
      loading={loading}
      loadingMoreData={loadingMoreData}
      getGridActions={dynamicRowHeight ? getGridActions : undefined}
      buffer={buffer}
      dynamicRowHeight={dynamicRowHeight}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      virtualization={virtualization}
      schema={schema}
      loaderSchema={loaderSchema}
      data={getData()}
    />
  );
};

export default {
  title: 'Organisms|Table',
  component: Grid
};
