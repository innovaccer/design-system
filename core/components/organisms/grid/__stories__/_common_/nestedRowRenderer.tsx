import * as React from 'react';
import { List } from '@/index';
import { NestedRowProps } from '../../GridNestedRow';

export const nestedRowRenderer = (props: NestedRowProps) => {
  const { schema, data, loading } = props;

  return <List loading={loading} schema={schema} data={[data]} nestedRows={true} />;
};
