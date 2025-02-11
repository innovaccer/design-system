import * as React from 'react';
import { Card, Table, Button } from '@/index';
import { AsyncTable, SyncTable } from '../_common_/types';
import { action } from '@/utils/action';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';

export const compressedTable = () => {
  const data = [
    {
      name: 'MSSP Track 1 Urban',
      status: 'Active',
      measures: 9,
      current_period: 'March 2017 - Feb 2018',
      added_in: 'March 2014',
    },
    {
      name: 'MSSP Track 1 Rural',
      status: 'Active',
      measures: 9,
      current_period: 'March 2017 - Feb 201',
      added_in: 'March 2015',
    },
    {
      name: 'MSSP Track 2',
      status: 'Inactive',
      measures: 14,
      current_period: 'March 2017 - Feb 201',
      added_in: 'March 2016',
    },
    {
      name: 'Aetna',
      status: 'Active',
      measures: 20,
      current_period: 'March 2017 - Feb 201',
      added_in: 'March 2019',
    },
    {
      name: 'BCBS',
      status: 'Active',
      measures: 16,
      current_period: 'March 2017 - Feb 201',
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
      comparator: (a, b) => {
        if (a.measures < b.measures) {
          return -1;
        } else if (a.measures === b.measures) {
          return 0;
        } else {
          return 1;
        }
      },
      sorting: true,
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

  const onDataExport = () => {
    action('Exporting data', data)();
  };

  const globalActionTrigger = (data) => {
    return <Button onClick={() => onDataExport(data)}>Export</Button>;
  };

  return (
    <Card className="overflow-hidden">
      <Table
        loaderSchema={loaderSchema}
        size="compressed"
        showMenu={false}
        separator={false}
        data={data}
        schema={schema}
        withHeader={true}
        headerOptions={{
          withSearch: true,
          globalActionRenderer: globalActionTrigger,
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
      measures: 9,
      current_period: "March 2017 - Feb 2018",
      added_in: "March 2014",
    },
    {
      name: 'MSSP Track 1 Rural',
      status: "Active",
      measures: 9,
      current_period: "March 2017 - Feb 201",
      added_in: "March 2015",
    },
    {
      name: 'MSSP Track 2',
      status: "Inactive",
      measures: 14,
      current_period: "March 2017 - Feb 201",
      added_in: "March 2016",
    },
    {
      name: 'Aetna',
      status: "Active",
      measures: 20,
      current_period: "March 2017 - Feb 201",
      added_in: "March 2019",
    },
    {
      name: 'BCBS',
      status: "Active",
      measures: 16,
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
      comparator: (a, b) => {
        if (a.measures < b.measures) {
          return -1;
        } else if (a.measures === b.measures) {
          return 0;
        } else {
          return 1;
        }
      },
      sorting: true
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

  const onDataExport = (data) => {
    console.log("Exporting data", data);
  }
  
  const globalActionTrigger = (data) => {
    return (<Button onClick={() => onDataExport(data)}>Export</Button>);
  } 

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="compressed"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          headerOptions={{
            withSearch: true,
            globalActionRenderer : globalActionTrigger
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
  title: 'Components/Table/Sizes/Compressed Table',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Compressed Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
