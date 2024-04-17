import * as React from 'react';
import { Grid, GridCell } from '@/index';

export const GridLoadingState = () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '50%',
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '50%',
    },
  ];

  return <Grid totalRecords={10} pageSize={5} schema={schema} loading={true} />;
};

const customCode = `() => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '50%'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '50%'
    }
  ];

  return (
    <Grid
      totalRecords={10}
      pageSize={5}
      schema={schema}
      loading={true}
    />
  );
}
`;

export default {
  title: 'Components/Grid/Variants/Grid Loading State',
  component: Grid,
  subcomponents: { GridCell },
  parameters: {
    docs: {
      docPage: {
        customCode,
        noProps: true,
      },
    },
  },
};
