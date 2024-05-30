import React from 'react';
import { AIButton } from '@/index';

export const Primary = () => {
  return <AIButton appearance="primary">Primary Button</AIButton>;
};

export default {
  title: 'Components/AI/AI Button/States/Primary',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
      },
    },
  },
};
