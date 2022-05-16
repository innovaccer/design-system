import * as React from 'react';
import { Message, Row, Column, Text } from '@/index';

export const CustomDescription = () => (
  <Row>
    <Column size="8">
      <Message
        actions={
          <>
            <Text className="cursor-pointer" appearance="link">
              Try again
            </Text>
          </>
        }
      >
        <Text appearance="default">Sorry we couldn't subscribe you. Please try again.</Text>
      </Message>
    </Column>
  </Row>
);

export default {
  title: 'Components/Message/Custom Description',
  component: Message,
};
