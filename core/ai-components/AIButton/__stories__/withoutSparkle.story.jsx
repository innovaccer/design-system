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
        a11yPropsTable: [
          'aria-label',
          'aria-labelledby',
          'aria-describedby',
          'aria-disabled',
          'aria-expanded',
          'aria-pressed',
          'aria-haspopup',
          'aria-controls',
          'aria-hidden',
          'aria-busy',
          'role',
          'tabIndex',
          'id',
          'title',
        ],
        title: 'AIButton',
        customCode,
        props: {
          exclude: ['appearance'],
        },
      },
    },
  },
};
