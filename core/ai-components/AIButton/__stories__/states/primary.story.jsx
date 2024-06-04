import React from 'react';
import { AIButton } from '@/index';

export const Primary = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton appearance="primary">Primary Button</AIButton>
      <AIButton appearance="primary" disabled={true}>
        Disabled Button
      </AIButton>
    </div>
  );
};

export default {
  title: 'Components/AI/AI Button/State/Primary',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
      },
    },
  },
};
