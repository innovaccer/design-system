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
    <Underline>This text is Underlined</Underline>
  );
};

export const UnderlineText = () => {
  return(
    <Text>Use this component to show <Underline>Underline</Underline> text.</Text>
  )
}
