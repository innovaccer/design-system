import * as React from 'react';
import { Message, Row, Column } from '@/index';

// CSF format story
export const alertMessage = () => (
  <Row>
    <Column size="4">
      <Message
        appearance="alert"
        description="Could not start verification. Please try again later."
      />
    </Column>
  </Row>
);

export default {
  title: 'Components/Message/Alert Message',
  component: Message
};
