import * as React from 'react';
import { List } from '@/index';

export const nestedRowRenderer = (props) => {
  const { schema, data, loading } = props;

  return <List loading={loading} schema={schema} data={[data]} nestedRows={true} />;
};
