import React from 'react';
import { Sara, Text } from '@/index';

export const States = () => {
  return (
    <div className="d-flex w-75">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <Sara state="resting" />
        <Text appearance="subtle" className="mt-6">
          Resting
        </Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/AI/Sara/States',
  component: Sara,
  parameters: {
    docs: {
      docPage: {
        title: 'Sara',
      },
    },
  },
};
