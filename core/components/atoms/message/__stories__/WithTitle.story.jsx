import * as React from 'react';
import { Message, Row, Column, Text } from '@/index';

// CSF format story
export const MessageWithTitle = () => (
  <Row>
    <Column size="8">
      <Message
        appearance="warning"
        title="Sender 'Alta Wells' already exists "
        description="Based on the details you've entered, we found that this sender might already be on our platform."
        actions={
          <>
            <Text className="cursor-pointer" appearance="link">
              Edit details
            </Text>
          </>
        }
      />
    </Column>
  </Row>
);

export default {
  title: 'Indicators/Message/Message With Title',
  component: Message,
};
