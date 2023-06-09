import * as React from 'react';
import { Message, Text, LinkButton } from '@/index';

export const CustomDescription = () => (
  <Message className="w-75" actions={<LinkButton>Try again</LinkButton>}>
    <Text>Sorry we couldn't subscribe you. Please try again.</Text>
  </Message>
);

export default {
  title: 'Components/Message/Custom Description',
  component: Message,
};
