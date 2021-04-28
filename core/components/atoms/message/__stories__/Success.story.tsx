import * as React from 'react';
import { Message, Row, Column } from '@/index';

// CSF format story
export const successMessage = () => (
  <Row>
    <Column size="4">
      <Message
        appearance="success"
        description="Password updated. Login with your updated credentials."
      />
    </Column>
  </Row>
);

export default {
  title: 'Components/Message/Success Message',
  component: Message
};
