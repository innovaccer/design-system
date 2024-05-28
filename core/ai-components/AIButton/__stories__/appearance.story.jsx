import React from 'react';
import { AIButton } from '@/index';

export const Appearance = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton appearance="primary">Primary Button</AIButton>
      <AIButton>Basic Button</AIButton>
    </div>
  );
};

export default {
  title: 'Components/AI/AI Button/Appearance',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
      },
    },
  },
};
