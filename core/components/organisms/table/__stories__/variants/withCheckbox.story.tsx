import * as React from 'react';
import data from '../data';
import schema from '../simpleSchema';
import { Card, Heading, Table } from '@/index';
import { TableProps } from '@/index.type';
import { action } from '@storybook/addon-actions';

// CSF format story
export const withCheckbox = () => {
  const values: TableProps['withCheckbox'][] = [true, false];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    // @ts-ignore
    <div style={style}>
      {values.map((v, index) => (
        <div
          key={index}
          style={{
            margin: '20px',
            width: '45%'
          }}
        >
          <Heading>{`withPagination: ${v}`}</Heading>
          <Card
            shadow="light"
            style={{
              height: '350px',
            }}
          >
            <Table
              data={data}
              schema={schema}
              totalRecords={data.length}
              withCheckbox={true}
              withPagination={v}
              onPageChange={(page: number) => action(`on page change:- ${page}`)()}
              onSelect={(rowIndex, selected) => action(`on select:- rowIndex:${rowIndex}, selected:${selected}`)()}
              onSelectAll={(page, selected) => action(`on select all:- page:${page}, selected:${selected}`)()}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Organisms|Table/Variants',
  component: Table
};
