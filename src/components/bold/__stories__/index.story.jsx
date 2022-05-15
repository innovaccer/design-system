import * as React from 'react';
import { Bold, Text } from '@/index';

export default {
  title: 'Typography/Bold',
  component: Bold,
  parameters: {
    docs: {
      docPage: {
        title: 'Bold',
      },
    },
  },
};

export const Default = () => {

  return (
    <Bold>This text is bold</Bold>
  );
};

export const BoldText = () => {
  return(
    <Text>Use this component to show <Bold>bold</Bold> text.</Text>
  )
}
