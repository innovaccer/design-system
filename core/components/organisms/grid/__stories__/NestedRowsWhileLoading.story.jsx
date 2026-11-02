import * as React from 'react';
import { Grid, Text } from '@/index';

const schema = [
  { name: 'name', displayName: 'Name', width: '50%' },
  { name: 'gender', displayName: 'Gender', width: '50%' },
];

const data = [
  { name: 'Wadsworth Seden', gender: 'Male' },
  { name: 'Louella Veneur', gender: 'Female' },
];

const nestedRowRenderer = ({ data: rowData }) => <Text>Details of {rowData.name}</Text>;

// CSF format story
export const nestedRowsWhileLoading = () => {
  return (
    <div style={{ height: '200px' }}>
      <Grid schema={schema} data={data} nestedRows={true} nestedRowRenderer={nestedRowRenderer} loading={true} />
    </div>
  );
};

const customCode = `() => {
  const schema = [
    { name: 'name', displayName: 'Name', width: '50%' },
    { name: 'gender', displayName: 'Gender', width: '50%' },
  ];

  const data = [
    { name: 'Wadsworth Seden', gender: 'Male' },
    { name: 'Louella Veneur', gender: 'Female' },
  ];

  const nestedRowRenderer = ({ data: rowData }) => <Text>Details of {rowData.name}</Text>;

  return (
    <div style={{ height: '200px' }}>
      <Grid schema={schema} data={data} nestedRows={true} nestedRowRenderer={nestedRowRenderer} loading={true} />
    </div>
  );
}`;

export default {
  title: 'Components/Grid/Nested Rows While Loading',
  component: Grid,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Nested Rows While Loading',
        noHtml: true,
      },
    },
  },
};
