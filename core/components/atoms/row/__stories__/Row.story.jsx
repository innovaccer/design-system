import * as React from 'react';
import { Row, Column } from '@/index';

// CSF format story
export const row = () => {
  return (
    <>
      <Row>
        <Column className="p-6 bg-secondary-lightest border">Row 1</Column>
      </Row>
      <Row className="mt-3">
        <Column className="p-6 bg-secondary-lightest border">Row 2</Column>
      </Row>
      <Row className="mt-3">
        <Column className="p-6 bg-secondary-lightest border">Row 3</Column>
      </Row>
      <Row className="mt-3">
        <Column className="p-6 bg-secondary-lightest border">Row 4</Column>
      </Row>
      <Row className="mt-3">
        <Column className="p-6 bg-secondary-lightest border">Row 5</Column>
      </Row>
    </>
  );
};

export default {
  title: 'Components/Layout/Row',
  component: Row,
};
