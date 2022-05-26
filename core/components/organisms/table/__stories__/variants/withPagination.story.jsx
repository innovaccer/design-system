import * as React from 'react';
import { Card, Heading, Table } from '@/index';
import { action } from '@/utils/action';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/schema';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const withPagination = () => {
  const values = ['basic', 'jump'];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  };
  // to freeze the object for typescript

  return (
    <div style={style}>
      {values.map((v, index) => (
        <div
          key={index}
          style={{
            margin: '20px',
            width: '45%',
          }}
        >
          <Heading>{`paginationType: ${v}`}</Heading>
          <div
            style={{
              height: '350px',
            }}
          >
            <Card shadow="light" className="h-100">
              <Table
                data={data}
                schema={schema}
                withPagination={true}
                paginationType={v}
                onPageChange={(newPage) => action(`on-page-change:- ${newPage}`)()}
              />
            </Card>
          </div>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Table/Variants/With Pagination',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      },
    },
  },
};
