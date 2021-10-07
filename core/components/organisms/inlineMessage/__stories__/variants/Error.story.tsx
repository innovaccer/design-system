import * as React from 'react';
import { InlineMessage, Row, Column } from '@/index';

// CSF format story
export const alertMessage = () => (
  <Row>
    <Column size="4">
      <InlineMessage appearance="alert" description="Inline message goes here." />
    </Column>
  </Row>
);

export default {
  title: 'Components/InlineMessage/Variants/Alert Message',
  component: InlineMessage,
};
