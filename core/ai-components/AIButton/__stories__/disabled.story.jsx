import React from 'react';
import { AIButton } from '@/index';

export const Disabled = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton appearance="primary" disabled>
        Primary Button
      </AIButton>
      <AIButton disabled>Basic Button</AIButton>
    </div>
  );
};

export default {
  title: 'Components/AI/AI Button/States/Disabled',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
      },
    },
  },
};
