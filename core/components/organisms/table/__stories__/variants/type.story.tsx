import * as React from 'react';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/simpleSchema';
import { Card, Heading, Table } from '@/index';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';
import { action } from '@storybook/addon-actions';
import { GridType } from '@/components/organisms/grid';

// CSF format story
export const type = () => {
  const values: GridType[] = ['resource', 'data'];

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
          <Heading>{v}</Heading>
          <div
            style={{
              height: '350px',
            }}
          >
            <Card
              shadow="light"
              className="h-100"
            >
              <Table
                type={v}
                data={data}
                schema={schema}
                onRowClick={(rowData, rowIndex) => action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()}
              />
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Table/Variants/Type',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead']
        }
      }
    }
  }
};
