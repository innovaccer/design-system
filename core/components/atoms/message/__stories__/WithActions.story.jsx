import * as React from 'react';
import { Message, Row, Column, Text } from '@/index';

// CSF format story
export const MessageWithActions = () => (
  <Row>
    <Column size="8">
      <Message
        appearance="alert"
        description="Sorry we couldn't subscribe you. Please try again."
        actions={
          <>
            <Text className="cursor-pointer" appearance="link">
              Try again
            </Text>
          </>
        }
      />
    </Column>
  </Row>
);

export default {
  title: 'Components/Message/Message With Actions',
  component: Message,
};
