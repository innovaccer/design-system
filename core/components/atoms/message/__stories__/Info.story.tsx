import * as React from 'react';
import { Message, Row, Column } from '@/index';

// CSF format story
export const infoMessage = () => (
  <Row>
    <Column size="4">
      <Message
        appearance="info"
        description="Patient profile has been updated with new records."
      />
    </Column>
  </Row>
);

export default {
  title: 'Components/Message/Info Message',
  component: Message
};
