import * as React from 'react';
import { InlineMessage, Row, Column } from '@/index';

// CSF format story
export const successMessage = () => (
  <Row>
    <Column size="4">
      <InlineMessage appearance="success" description="Inline message goes here." />
    </Column>
  </Row>
);

export default {
  title: 'Components/InlineMessage/Variants/Success Message',
  component: InlineMessage,
};
