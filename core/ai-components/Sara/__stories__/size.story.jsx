import React from 'react';
import { Sara, Text } from '@/index';

export const Sizes = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center w-75">
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara />
          <Text appearance="subtle" className="mt-6">
            32
          </Text>
        </div>
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara size={48} />
          <Text appearance="subtle" className="mt-6">
            48
          </Text>
        </div>
        <div className="d-flex flex-column align-items-center text-align-center w-100">
          <Sara size={64} />
          <Text appearance="subtle" className="mt-6">
            64
          </Text>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/AI/Sara/Sizes',
  component: Sara,
  parameters: {
    docs: {
      docPage: {
        title: 'Sara',
      },
    },
  },
};
