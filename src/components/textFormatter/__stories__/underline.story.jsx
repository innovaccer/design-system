import * as React from 'react';
import { Underline, Text } from '@/index';

export default {
  title: 'Typography/Underline',
  component: Underline,
  parameters: {
    docs: {
      docPage: {
        title: 'Underline',
      },
    },
  },
};

export const Default = () => {

  return (
    <Underline>Enter any underline text here</Underline>
  );
};

export const UnderlineText = () => {
  return(
    <Text>Use this component to show <Underline>underline</Underline> text.</Text>
  )
}
