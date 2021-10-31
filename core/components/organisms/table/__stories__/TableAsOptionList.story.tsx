import * as React from 'react';
import { Card, List, Text } from '@/index';
import { TableProps } from '@/index.type';
import { AsyncTable, SyncTable } from './_common_/types';
import { action } from '@storybook/addon-actions';

export const tableAsOptionList = () => {
  const data = [
    {
      assessment: 'Alcohol Usage Disorders Identification Test - C (Audit C)',
    },
    {
      assessment: 'Functional Assessment - Initial',
    },
    {
      assessment: 'Functional Assessment - Discharge',
    },
    {
      assessment: 'Hypertension - Diabetes Symptoms Identification Test',
    },
    {
      assessment: 'Patient Health Questionaire',
    },
  ];

  const schema: TableProps['schema'] = [
    {
      name: 'assessment',
      displayName: 'Assessment',
      cellType: 'DEFAULT',
      width: '100%',
    },
  ];

  return (
    <Card>
      <Text size="large" weight="strong" className="ml-5">
        Select Assessment
      </Text>
      <List
        type="resource"
        withHeader={true}
        headerOptions={{
          withSearch: true,
          dynamicColumn: false,
        }}
        separator={false}
        showMenu={false}
        data={data}
        schema={schema}
        withPagination={false}
        onSearch={(currData, searchTerm) => {
          return currData.filter((d) => d.assessment.toLowerCase().match(searchTerm.toLowerCase()));
        }}
        onRowClick={(rowData, rowIndex) =>
          action(`on-row-click:- rowIndex: ${rowIndex} data: ${JSON.stringify(rowData)}`)()
        }
      />
    </Card>
  );
};

const customCode = `() => {
  const data = [
    {
      assessment: 'Alcohol Usage Disorders Identification Test - C (Audit C)',
    },
    {
      assessment: 'Functional Assessment - Initial',
    },
    {
      assessment: 'Functional Assessment - Discharge',
    },
    {
      assessment: 'Hypertension - Diabetes Symptoms Identification Test',
    },
    {
      assessment: 'Patient Health Questionaire',
    },
  ];

  const schema = [
    {
      name: 'assessment',
      displayName: 'Assessment',
      cellType: "DEFAULT",
      width: '100%'
    },
  ];

  return (
      <Card>
        <Text size="large" weight="strong" className="ml-5">Select Assessment</Text>
        <List
          type="resource"
          withHeader={true}
          headerOptions={{
            withSearch: true,
            dynamicColumn: false
          }}
          separator={false}
          showMenu={false}
          data={data}
          schema={schema}
          withPagination={false}
          onSearch={(currData, searchTerm) => {
            return currData.filter(d =>
              d.assessment.toLowerCase().match(searchTerm.toLowerCase())
            );
          }}
          onRowClick={(rowData, rowIndex) =>
            console.log(\`on-row-click:- rowIndex: \${rowIndex} data: \${JSON.stringify(rowData)}\`)
          }
        />
      </Card>
  );
}`;

export default {
  title: 'Components/Table/Table As Option List',
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Table as Option List',
        props: {
          components: { AsyncTable, SyncTable },
          exclude: ['showHead'],
        },
      },
    },
  },
};
