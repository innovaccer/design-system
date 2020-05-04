import * as React from 'react';
import { boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Table from '../Table';
import { Schema, GridActions, LoadingSchema } from '../interfaces';
import Checkbox from '@/components/atoms/checkbox';
import Avatar, { Appearance } from '@/components/atoms/avatar';
import Button from '@/components/atoms/button';
import userData from './users';

type SimpleObject = Record<string, any>;
const appearance: Appearance[] = ['primary', 'success', 'alert', 'warning'];
let gridActions: GridActions;

const getSchema = (index: number) => {
  const { schema } = userData;
  return schema[index];
};

const loadMore = () => {
  action('load more data')();
};

const getGridActions = (gActions?: GridActions) => {
  action('get grid actions')();
  if (gActions) gridActions = gActions;
};

export const all = () => {
  const loading = boolean(
    'loading',
    false
  );

  const dynamicRowHeight = boolean(
    'dynamicRowHeight',
    false
  );

  const pinned = boolean(
    'pinned',
    true
  );

  const pagination = boolean(
    'pagination',
    true,
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

  const limit = number(
    'limit',
    10
  );

  const [allChecked, setAllChecked] = React.useState(false);

  const loaderSchema: LoadingSchema[] = [
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

  const schema: Schema[] = [
    {
      width: 50,
      template: ({ checked }: SimpleObject) => {
        return (
          <div className="TableGrid-cellWrapper">
            <Checkbox
              checked={checked || allChecked}
            />
          </div>
        );
      },
      pinned: pinned ? 'LEFT' : undefined,
      header: () => {
        return (
          <div className="TableGrid-cellWrapper">
            <Checkbox
              checked={allChecked}
              onChange={(checked: boolean) => {
                setAllChecked(checked);
              }}
            />
          </div>
        );
      },
      name: 'checked',
      displayName: '',
    },
    {
      pinned: pinned ? 'LEFT' : undefined,
      template: ({ x, rowIndex }: SimpleObject) => (
        <div className="TableGrid-cellWrapper">
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
      name: 'name',
      displayName: '',
    },
    {
      width: 200,
      template: (row: SimpleObject) => (
        <div className="TableGrid-cellWrapper">
          {row.name}
        </div>
      ),
      pinned: pinned ? 'LEFT' : undefined,
      get: ({ firstName, lastName }: SimpleObject) => ({
        name: `${firstName} ${lastName}`,
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
        <div className="TableGrid-cellWrapper ellipsis">{props[getSchema(2).name]}</div>
      ),
      name: getSchema(2).name,
      displayName: getSchema(2).display_name,
    },
    {
      width: 200,
      template: ({ rowIndex }: SimpleObject) => (
        <div
          className={'TableGrid-cellWrapper'}
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
    <Table
      style={{
        maxHeight: '300px',
        maxWidth: 1200,
      }}
      loadMore={loadMore}
      loading={loading}
      getGridActions={dynamicRowHeight ? getGridActions : undefined}
      buffer={buffer}
      dynamicRowHeight={dynamicRowHeight}
      rowHeight={rowHeight}
      headerHeight={headerHeight}
      schema={schema}
      loaderSchema={loaderSchema}
      data={userData.users}
      pagination={pagination}
      limit={limit}
    />
  );
};

const customCode = `() => {
  const appearance = ['primary', 'success', 'alert', 'warning']
  const pinned = true
  const schema = [{pinned: pinned ? 'LEFT' : undefined,template: ({ x, rowIndex }) => (<div className="TableGrid-cellWrapper"><Avatar appearance={appearance[rowIndex % appearance.length]}>{x}</Avatar></div>),get: ({ firstName, lastName }) => ({x: firstName[0] + lastName[0],}),header: () => <div />,name: '',displayName: '',},{width: 200,template: (row) => (<div className="TableGrid-cellWrapper">{row.firstName} {row.lastName}</div>),pinned: pinned ? 'LEFT' : undefined,get: ({ firstName, lastName }) => ({firstName,lastName,}),name: 'name',displayName: 'Name',},{width: 200,name: 'gender',displayName: 'Gender',},{width: 200,template: (props) => (<div className="TableGrid-cellWrapper ellipsis">{props['email']}</div>),name: 'email',displayName: 'Email',},{width: 200,name: 'note',displayName: 'Note',},];
  const data = [{firstName: 'Brooke',lastName: 'Heeran',email: 'bheeran0@altervista.org',gender: 'Female',},{firstName: 'Frazer',lastName: 'Cathro',email: 'fcathro1@ucla.edu',gender: 'Male',},{firstName: 'Lemmie',lastName: 'Ciric',email: 'lciric2@dmoz.org',gender: 'Male',},{firstName: 'Randy',lastName: 'Boatwright',email: 'rboatwright3@arstechnica.com',gender: 'Male',},{firstName: 'Rolando',lastName: 'Cyples',email: 'rcyples4@biglobe.ne.jp',gender: 'Male',},{firstName: 'Lem',lastName: 'Males',email: 'lmales5@admin.ch',gender: 'Male',},{firstName: 'Sayres',lastName: 'Adelberg',email: 'sadelberg6@uol.com.br',gender: 'Male',},{firstName: 'Murray',lastName: 'Bravington',email: 'mbravington7@drupal.org',gender: 'Male',},{firstName: 'Jena',lastName: 'Swatheridge',email: 'jswatheridge8@npr.org',gender: 'Female',},{firstName: 'Annabel',lastName: 'Nelsey',email: 'anelsey9@google.com',gender: 'Female',}]
  return (
    <Table
      buffer={5} data={data} headerHeight={40} limit={10} loaderSchema={[{ pinned: 'LEFT' , round: false, withImage: false }, { pinned: 'LEFT' , round: true, width: 200 }, { width: 200 }, { round: true, width: 200 }, { round: false, width: 200, withImage: false } ]} rowHeight={50} schema={schema} style={{
        maxHeight: '300px',
        maxWidth: 1200
      }}
    />
  );
}`;

export default {
  title: 'Organisms|Table',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
