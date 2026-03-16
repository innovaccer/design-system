import React from 'react';
import { AIButton } from '@/index';

export const state = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton>AI Button</AIButton>
      <AIButton disabled={true}>Disabled Button</AIButton>
    </div>
  );
};

export default {
  title: 'Components/AI/AI Button/State',
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
        props: {
          exclude: ['appearance'],
        },
      },
    },
  },
};
