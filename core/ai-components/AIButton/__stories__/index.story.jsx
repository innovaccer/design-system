import React from 'react';
import { AIButton } from '@/index';

export const All = () => {
  return <AIButton>AI Button</AIButton>;
};

export default {
  title: 'Components/AI/AI Button/All',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
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
        props: {
          exclude: ['appearance'],
        },
      },
    },
  },
};
