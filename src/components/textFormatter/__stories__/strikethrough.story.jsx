import * as React from 'react';
import { Strikethrough, Text } from '@/index';

export default {
  title: 'Typography/Strikethrough',
  component: Strikethrough,
  parameters: {
    docs: {
      docPage: {
        title: 'Strikethrough',
      },
    },
  },
};

export const Default = () => {

  return (
    <Strikethrough>Enter any strikethrough text here</Strikethrough>
  );
};

export const StrikethroughText = () => {
  return(
    <Text>Use this component to show <Strikethrough>strikethrough</Strikethrough> text.</Text>
  )
}
