import React from 'react';
import { AIButton } from '@/index';

export const WithoutSparkle = () => {
  return <AIButton withSparkle={false}>AI Button</AIButton>;
};

const customCode = `() => {
  return <AIButton withSparkle={false}>AI Button</AIButton>;
}`;

export default {
  title: 'Components/AI/AI Button/WithoutSparkle',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
        customCode,
        props: {
          exclude: ['appearance'],
        },
      },
    },
  },
};
