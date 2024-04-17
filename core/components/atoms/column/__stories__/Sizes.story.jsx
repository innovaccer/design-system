import * as React from 'react';
import { Row, Column } from '@/index';

// CSF format story
export const sizes = () => {
  return (
    <>
      <Row>
        <Column className="p-6 border bg-secondary-lightest mr-4" size={10}>
          size=10
        </Column>
        <Column className="p-6 bg-secondary-lightest border">size=2</Column>
      </Row>
      <Row className="justify-space-between mt-6">
        <Column className="p-6 border bg-secondary-lightest mr-4" size={8}>
          size=8
        </Column>
        <Column className="p-6 bg-secondary-lightest border">size=4</Column>
      </Row>
      <Row className="justify-space-between mt-6">
        <Column className="p-6 border bg-secondary-lightest mr-4" size={6}>
          size=6
        </Column>
        <Column className="p-6 bg-secondary-lightest border">size=6</Column>
      </Row>
    </>
  );
};

export default {
  title: 'Components/Layout/Sizes',
  component: Column,
};
