import * as React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Grid from '../Grid';
import { ISchema, IGridActions } from '../interfaces';
import users from './users';
import { updateKnob } from '@/utils/storybookEventEmitter';
import Checkbox from '@/components/atoms/checkbox';
import Avatar, { Appearance } from '@/components/atoms/avatar';
import Button from '@/components/atoms/button';

type SimpleObject = Record<string, any>;
const appearance: Appearance[] = ['primary', 'success', 'alert', 'warning'];
let limit = 1;
let data: SimpleObject[] = [];
let gridActions: IGridActions;

const getData = () => {
  for (let i = 0; i < limit; i++) {
    data = [...data, ...users];
  }

  return data;
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
    },
    {
      width: 100,
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
      header: () => <></>,
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
      header: () => <div className="cell-wrapper">Name</div>,
    },
    {
      width: 200,
      template: ({ x }: SimpleObject) => (
        <div className="cell-wrapper">{x}</div>
      ),
      get: ({ gender }: SimpleObject) => ({ x: gender }),
      header: () => <div className="cell-wrapper">Gender</div>,
    },
    {
      width: 200,
      template: ({ x }: SimpleObject) => (
        <div className="cell-wrapper ellipsis">{x}</div>
      ),
      get: ({ email }: SimpleObject) => ({ x: email }),
      header: () => <div className="cell-wrapper">Email</div>,
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
      get: () => ({}),
      header: () => <div className="cell-wrapper">Note</div>,
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
      data={getData()}
    />
  );
};

export default {
  title: 'Organisms|Table',
  component: Grid
};
