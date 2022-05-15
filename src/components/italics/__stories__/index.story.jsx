import * as React from 'react';
import { Italics, Text } from '@/index';

export default {
  title: 'Typography/Italics',
  component: Italics,
  parameters: {
    docs: {
      docPage: {
        title: 'Italics',
      },
    },
  },
};

export const Default = () => {

  return (
    <Italics>This text is italics</Italics>
  );
};

export const ItalicsText = () => {
  return(
    <Text>Use this component to show <Italics>italics</Italics> text.</Text>
  )
}
