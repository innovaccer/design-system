import * as React from 'react';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import schema from '@/components/organisms/grid/__stories__/_common_/simpleSchema';
import { Card, Heading, Table } from '@/index';
import { TableProps } from '@/index.type';
import { action } from '@/utils/action';
import { AsyncTable, SyncTable } from '@/components/organisms/table/__stories__/_common_/types';

// CSF format story
export const withCheckbox = () => {
  const values: TableProps['withCheckbox'][] = [true, false];

  const style = {
    display: 'flex',
    flexWrap: 'wrap',
  } as const;
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
          <Heading>{`withPagination: ${v}`}</Heading>
          <div
            style={{
              height: '350px',
            }}
          >
            <Card shadow="light" className="h-100">
              <Table
                data={data}
                schema={schema}
                withCheckbox={true}
                withPagination={v}
                onSelect={(rowIndex, selected, selectedList, selectAll) =>
                  action(
                    `on-select:- rowIndex: ${rowIndex} selected: ${selected} selectedList: ${JSON.stringify(
                      selectedList
                    )} selectAll: ${selectAll}`
                  )()
                }
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
  title: 'Components/Table/Variants/With Checkbox',
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
