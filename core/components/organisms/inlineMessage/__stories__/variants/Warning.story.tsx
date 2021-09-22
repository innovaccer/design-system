import * as React from 'react';
import { InlineMessage, Row, Column } from '@/index';
// CSF format story
export const warningMessage = () => (
  <Row>
    <Column size="4">
      <InlineMessage
        appearance="warning"
        description="Inline message goes here."
      />
    </Column>
  </Row>
);

export default {
  title: 'Components/InlineMessage/Variants/Warning Message',
  component: InlineMessage
};
