import * as React from 'react';
import { Table, Card } from '@/index';
import { AsyncTable, SyncTable } from './_common_/types';

export const alignment = () => {
  const data = [
    {
      id: '89092830',
      priority: 'Urgent',
      providerDetails: {
        title: 'Dr. John Doe',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Brooklyn Simmons',
        metaList: ['Male', '12/12/2020'],
      },
    },
    {
      id: '89092834',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jenny Wilson',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Theresa Webb',
        metaList: ['Male', '12/12/2020'],
      },
    },
    {
      id: '89092124',
      priority: 'Urgent',
      providerDetails: {
        title: 'Devon Lane',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Behavioral health',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Dianne Russell',
        metaList: ['Male', '01/08/2020'],
      },
    },
    {
      id: '87329072',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jerome Bell',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['Phone/Email'],
      },
      patientDetails: {
        title: 'Floyd Miles',
        metaList: ['Male', '09/08/2020'],
      },
    },
    {
      id: '89092855',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jenny Wilson',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['Phone/Email'],
      },
      patientDetails: {
        title: 'Albert Flores',
        metaList: ['Male', '06/12/1997'],
      },
    },
  ];

  const schema = [
    {
      name: 'patientDetails',
      displayName: 'Name',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'id',
      displayName: 'ID',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'providerDetails',
      displayName: 'Provider',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'sourceDetails',
      displayName: 'Type & source',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'priority',
      displayName: 'Priority',
      width: '20%',
      verticalAlign: 'top',
    },
  ];

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          page={1}
          data={data}
          schema={schema}
          showMenu={true}
          withHeader={true}
          withPagination={true}
          withCheckbox={true}
          checkboxAlignment="top"
          pageSize={5}
          headerOptions={{
            withSearch: true,
          }}
        />
      </Card>
    </div>
  );
};

const customCode = `() => {
  const data = [
    {
      id: '89092830',
      priority: 'Urgent',
      providerDetails: {
        title: 'Dr. John Doe',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Brooklyn Simmons',
        metaList: ['Male', '12/12/2020'],
      },
    },
    {
      id: '89092834',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jenny Wilson',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Theresa Webb',
        metaList: ['Male', '12/12/2020'],
      },
    },
    {
      id: '89092124',
      priority: 'Urgent',
      providerDetails: {
        title: 'Devon Lane',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Behavioral health',
        metaList: ['InNote'],
      },
      patientDetails: {
        title: 'Dianne Russell',
        metaList: ['Male', '01/08/2020'],
      },
    },
    {
      id: '87329072',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jerome Bell',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['Phone/Email'],
      },
      patientDetails: {
        title: 'Floyd Miles',
        metaList: ['Male', '09/08/2020'],
      },
    },
    {
      id: '89092855',
      priority: 'Urgent',
      providerDetails: {
        title: 'Jenny Wilson',
        metaList: ['Bancroft Medical Clinic'],
      },
      sourceDetails: {
        title: 'Medical',
        metaList: ['Phone/Email'],
      },
      patientDetails: {
        title: 'Albert Flores',
        metaList: ['Male', '06/12/1997'],
      },
    },
  ];

  const schema = [
    {
      name: 'patientDetails',
      displayName: 'Name',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'id',
      displayName: 'ID',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'providerDetails',
      displayName: 'Provider',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'sourceDetails',
      displayName: 'Type & source',
      cellType: 'WITH_META_LIST',
      width: '20%',
      verticalAlign: 'top',
    },
    {
      name: 'priority',
      displayName: 'Priority',
      width: '20%',
      verticalAlign: 'top',
    },
  ];

  return (
    <div className="vh-50">
      <Card className="h-100 overflow-hidden">
        <Table
          page={1}
          data={data}
          schema={schema}
          showMenu={true}
          withHeader={true}
          withPagination={true}
          withCheckbox={true}
          pageSize={5}
          checkboxAlignment="top"
          headerOptions={{
            withSearch: true,
          }}
        />
      </Card>
    </div>
  );
}`;

export default {
  title: 'Components/Table/Alignment',
  component: Table,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { AsyncTable, SyncTable },
        },
      },
    },
  },
};
