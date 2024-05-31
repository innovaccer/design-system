import React from 'react';
import { AIButton } from '@/index';

export const Basic = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton>Basic Button</AIButton>
      <AIButton disabled={true}>Disabled Button</AIButton>
    </div>
  );
};

export default {
  title: 'Components/AI/AI Button/State/Basic',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
      },
    },
  },
};
