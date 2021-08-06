import * as React from 'react';
import { Message, Row, Column } from '@/index';

// CSF format story
export const defaultMessage = () => (
  <Row>
    <Column size="4">
      <Message description="Message will be accessible through a password protected link." />
    </Column>
  </Row>
);

export default {
  title: 'Components/Message/Default Message',
  component: Message,
};
