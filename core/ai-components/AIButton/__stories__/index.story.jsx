import React from 'react';
import { AIButton } from '@/index';

export const All = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton>Basic Button</AIButton>
      <AIButton appearance="primary">Primary Button</AIButton>
    </div>
  );
};

export default {
  title: 'Components/AI/AI Button/All',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
      },
    },
  },
};
