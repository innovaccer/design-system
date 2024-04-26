import * as React from 'react';
import { Row, Column } from '@/index';

// CSF format story
export const column = () => {
  return (
    <Row>
      <Column className="p-6 border bg-secondary-lightest">Column 1</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 2</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 3</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 4</Column>
      <Column className="p-6 border bg-secondary-lightest">Column 5</Column>
    </Row>
  );
};

export default {
  title: 'Components/Layout/Column',
  component: Column,
};
