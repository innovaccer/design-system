import * as React from 'react';
import { Card, Table } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';
import loaderSchema from '@/components/organisms/grid/__stories__/_common_/loaderSchema';

export const pinnedColumns = () => {
  const data = [
    {
      s_no: 1,
      empi: 'P087636',
      first_name: 'Joy',
      last_name: 'Lawson',
      dob: '01/12/1982',
      gender: 'Female',
      facility: 'Charity Medical Clinic',
    },
    {
      s_no: 2,
      empi: 'P087637',
      first_name: 'Hannah',
      last_name: 'Pop',
      dob: '01/11/1982',
      gender: 'Female',
      facility: 'Bancroft Medical Clinic',
    },
    {
      s_no: 3,
      empi: 'P087638',
      first_name: 'Lisa',
      last_name: 'Sanchez',
      dob: '02/12/1981',
      gender: 'Female',
      facility: 'Lullaby Medical Clinic',
    },
    {
      s_no: 4,
      empi: 'P087639',
      first_name: 'Kathy',
      last_name: 'Powell',
      dob: '01/10/1972',
      gender: 'Female',
      facility: 'Charity Medical Clinic',
    },
    {
      s_no: 5,
      empi: 'P087631',
      first_name: 'Dennis',
      last_name: 'Lane',
      dob: '01/10/1982',
      gender: 'Male',
      facility: 'Lullaby Medical Clinic',
    },
  ];

  const schema = [
    {
      name: 's_no',
      displayName: 'S.no.',
      width: '5%',
      sorting: false,
      pinned: 'left',
    },
    {
      name: 'empi',
      displayName: 'EMPI',
      width: '10%',
      sorting: false,
      pinned: 'left',
    },
    {
      name: 'first_name',
      displayName: 'First Name',
      width: '20%',
      sorting: false,
    },
    {
      name: 'last_name',
      displayName: 'Last Name',
      width: '20%',
      sorting: false,
    },
    {
      name: 'dob',
      displayName: 'DOB',
      width: '20%',
      sorting: false,
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '20%',
      sorting: false,
    },
    {
      name: 'facility',
      displayName: 'Facility',
      sorting: false,
    },
  ];

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
        withCheckbox={true}
        headerOptions={{
          withSearch: false,
        }}
        withPagination={false}
      />
    </Card>
  );
};

const customCode = `() => {
  const data = [
    {
      s_no: 1,
      empi: "P087636",
      first_name: "Joy",
      last_name: "Lawson",
      dob: "01/12/1982",
      gender: 'Female',
      facility: 'Charity Medical Clinic'
    },
    {
      s_no: 2,
      empi: "P087637",
      first_name: "Hannah",
      last_name: "Pop",
      dob: "01/11/1982",
      gender: 'Female',
      facility: 'Bancroft Medical Clinic'
    },
    {
      s_no: 3,
      empi: "P087638",
      first_name: "Lisa",
      last_name: "Sanchez",
      dob: "02/12/1981",
      gender: 'Female',
      facility: 'Lullaby Medical Clinic'
    },
    {
      s_no: 4,
      empi: "P087639",
      first_name: "Kathy",
      last_name: "Powell",
      dob: "01/10/1972",
      gender: 'Female',
      facility: 'Charity Medical Clinic'
    },
    {
      s_no: 5 ,
      empi: "P087631",
      first_name: "Dennis",
      last_name: "Lane",
      dob: "01/10/1982",
      gender: 'Male',
      facility: 'Lullaby Medical Clinic'
    },
  ];

  const schema = [
    {
      name: 's_no',
      displayName: 'S.no.',
      width: '5%',
      sorting: false,
      pinned: 'left'
    },
    {
      name: 'empi',
      displayName: 'EMPI',
      width: '10%',
      sorting: false,
      pinned: 'left'
    },
    {
      name: 'first_name',
      displayName: 'First Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'last_name',
      displayName: 'Last Name',
      width: '20%',
      sorting: false
    },
    {
      name: 'dob',
      displayName: 'DOB',
      width: '20%',
      sorting: false
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '20%',
      sorting: false
    },
    {
      name: 'facility',
      displayName: 'Facility',
      sorting: false
    },
  ];

  return (
      <Card className="overflow-hidden">
        <Table
          showMenu={false}
          size="compressed"
          separator={false}
          data={data}
          schema={schema}
          withHeader={true}
          withCheckbox={true}
          headerOptions={{
            withSearch: false
          }}
          withPagination={false}
        />
      </Card>
  );
}`;

export default {
  title: 'Components/Table/Pinned Columns',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Pinned Columns in Table',
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
