import * as React from 'react';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';

export const compressedTable = () => {
  const fetchData = ({ searchTerm = '' }) => {
    // eslint-disable-next-line no-undef
    const uri = `/measures?${new URLSearchParams({ searchTerm })}`;
    // eslint-disable-next-line no-undef
    return fetch(uri).then((res) => res.json());
  };

  return (
    <Card className="vh-50">
      <Table
        size="compressed"
        showMenu={false}
        separator={false}
        fetchData={fetchData}
        withHeader={true}
        headerOptions={{
          withSearch: true,
        }}
        pageSize={5}
      />
    </Card>
  );
};

export default {
  title: 'Components/Table/Compressed Table',
  parameters: {
    docs: {
      docPage: {
        title: 'Compressed Table',
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      },
    },
  },
};
