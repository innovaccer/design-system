import * as React from 'react';
import { Card, Table, Heading, Text } from '@/index';
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
    {
      className: 'white-space-nowrap',
      properties: 'white-space: nowrap;',
    },
    {
      className: 'white-space-pre',
      properties: 'white-space: pre;',
    },
    {
      className: 'bottom-0',
      properties: 'bottom: 0;',
    },
    {
      className: 'visibility-show',
      properties: 'visibility: visible;',
    },
    {
      className: 'visibility-hidden',
      properties: 'visibility: hidden;',
    },
  ];

  return (
    <div>
      <Heading size="xxl">Miscellaneous</Heading>
      <br />
      <Text weight="strong">Utility classes for overflow behavior, cursor, whitespace, and visibility.</Text>
      <div className="mt-8 mb-8" style={{ height: '320px' }}>
        <Card className="h-100">
          <Table
            data={data}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size="standard"
            showMenu={false}
          />
        </Card>
      </div>
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
