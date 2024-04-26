import * as React from 'react';
import { Card, Table } from '@/index';
import utilitiesSchema from '../Schema';

export const miscellaneous = () => {
  const data = [
    {
      className: 'hide-scroll-bar::-webkit-scrollbar',
      properties: 'height: 0px;\nbackground: transparent;',
    },
    {
      className: 'hide-scroll-bar',
      properties: '-ms-overflow-style: none;\nscrollbar-width: none;',
    },
    {
      className: 'ellipsis',
      properties: 'overflow: hidden;\ntext-overflow: ellipsis;',
    },
    {
      className: 'ellipsis--noWrap',
      properties: 'white-space: nowrap;\noverflow: hidden;\ntext-overflow: ellipsis;',
    },
    {
      className: 'cursor-pointer',
      properties: 'cursor: pointer;',
    },
  ];
  return (
    <div className="mt-8 mb-8">
      <Card className="h-100">
        <Table
          data={data}
          schema={utilitiesSchema}
          headerOptions={{
            withSearch: true,
          }}
          size={'standard'}
          showMenu={false}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Miscellaneous',
  component: miscellaneous,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
