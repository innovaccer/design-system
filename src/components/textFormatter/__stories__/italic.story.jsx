import * as React from 'react';
import { Italic, Text } from '@/index';

export default {
  title: 'Typography/Italic',
  component: Italic,
  parameters: {
    docs: {
      docPage: {
        title: 'Italic',
      },
    },
  },
};

export const Default = () => {

  return (
    <Italic>Enter any italic text here</Italic>
  );
};

export const ItalicText = () => {
  return(
    <Text>Use this component to show <Italic>italic</Italic> text.</Text>
  )
}
