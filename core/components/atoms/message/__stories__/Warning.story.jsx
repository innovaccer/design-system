import * as React from 'react';
import { Message, Row, Column } from '@/index';
// CSF format story
export const warningMessage = () => (
  <Row>
    <Column size="8">
      <Message appearance="warning" description="Try to save again. If it continues to fail, please raise a ticket." />
    </Column>
  </Row>
);

export default {
  title: 'Indicators/Message/Warning Message',
  component: Message,
};
