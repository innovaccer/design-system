import * as React from 'react';
import { Message, Row, Column } from '@/index';
// CSF format story
export const warningMessage = () => (
  <Row>
    <Column size="4">
      <Message
        appearance="warning"
        description="Try to save again. If it continues to fail, please raise a ticket."
      />
    </Column>
  </Row>
);

export default {
  title: 'Components/Message/Warning Message',
  component: Message
};
