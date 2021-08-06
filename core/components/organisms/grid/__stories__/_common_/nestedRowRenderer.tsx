import * as React from 'react';
import { NestedRowProps } from '../../GridNestedRow';
import { List } from '@/index';

export const nestedRowRenderer = (props: NestedRowProps) => {
  const { schema, data, loading } = props;

  return <List loading={loading} schema={schema} data={[data]} nestedRows={true} />;
};
