import * as React from 'react';
import { Message, Text } from '@/index';

export const CustomDescription = () => (
  <Message
    className="w-75"
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
);

export default {
  title: 'Components/Message/Custom Description',
  component: Message,
};
