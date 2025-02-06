import * as React from 'react';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';

export const tightTable = () => {
  const data = [
    {
      name: 'MSSP Track 1 Urban',
      status: 'Active',
      measures: '9',
      current_period: 'March 2017 - Feb 2018',
      added_in: 'March 2014',
    },
    {
      name: 'MSSP Track 1 Rural',
      status: 'Active',
      measures: '9',
      current_period: 'March 2017 - Feb 2019',
      added_in: 'March 2015',
    },
    {
      name: 'MSSP Track 2',
      status: 'Inactive',
      measures: '14',
      current_period: 'March 2017 - Feb 2018',
      added_in: 'March 2016',
    },
    {
      name: 'Aetna',
      status: 'Active',
      measures: '20',
      current_period: 'March 2017 - Feb 2019',
      added_in: 'March 2019',
    },
    {
      name: 'BCBS',
      status: 'Active',
      measures: '16',
      current_period: 'March 2017 - Feb 2018',
      added_in: 'March 2017',
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '20%',
      sorting: false,
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      translate: (a) => ({
        title: a.status,
        statusAppearance: a.status === 'Inactive' ? 'default' : 'success',
      }),
      cellType: 'STATUS_HINT',
      sorting: false,
    },
    {
      name: 'measures',
      displayName: 'No. of Measures',
      width: '20%',
      sorting: false,
    },
    {
      name: 'current_period',
      displayName: 'Current Period',
      width: '20%',
      sorting: false,
    },
    {
      name: 'added_in',
      displayName: 'Added in',
      width: '20%',
      sorting: false,
    },
  ];

  return (
    <Card className="overflow-hidden">
      <Table
        loaderSchema={loaderSchema}
        size="tight"
        showMenu={false}
        separator={false}
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
        }}
        onSearch={(currData, searchTerm) => {
          return currData.filter((d) => d.name.toLowerCase().match(searchTerm.toLowerCase()));
        }}
        withPagination={false}
      />
    </Card>
  );
};

const customCode = `() => {
  const data = [
    {
      name: 'MSSP Track 1 Urban',
      status: "Active",
      measures: "9",
      current_period: "March 2017 - Feb 2018",
      added_in: "March 2014",
    },
    {
      name: 'MSSP Track 1 Rural',
      status: "Active",
      measures: "9",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2015",
    },
    {
      name: 'MSSP Track 2',
      status: "Inactive",
      measures: "14",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2016",
    },
    {
      name: 'Aetna',
      status: "Active",
      measures: "20",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2019",
    },
    {
      name: 'BCBS',
      status: "Active",
      measures: "16",
      current_period: "March 2017 - Feb 201",
      added_in: "March 2017",
    },
  ];

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'status',
      displayName: 'Status',
      width: '20%',
      translate: a => ({
        title: a.status,
        statusAppearance: (a.status === 'Inactive') ? 'default' : 'success'
      }),
      cellType: "STATUS_HINT",
      sorting: false
    },
    {
      name: 'measures',
      displayName: 'No. of Measures',
      width: '20%',
      sorting: false
    },
    {
      name: 'current_period',
      displayName: 'Current Period',
      width: '20%',
      sorting: false
    },
    {
      name: 'added_in',
      displayName: 'Added in',
      width: '20%',
      sorting: false
    },
  ];

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="tight"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true
          }}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.name.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          withPagination={false}
        />
      </Card>
  );
}`;

export default {
  title: 'Components/Table/Sizes/Tight Table',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Tight Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
