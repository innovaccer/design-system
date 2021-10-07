import * as React from 'react';
import { InlineMessage, Row, Column } from '@/index';

// CSF format story
export const defaultMessage = () => (
  <Row>
    <Column size="4">
      <InlineMessage description="Create a strong, unique password." />
    </Column>
  </Row>
);

export default {
  title: 'Components/InlineMessage/Variants/Default Message',
  component: InlineMessage,
};
