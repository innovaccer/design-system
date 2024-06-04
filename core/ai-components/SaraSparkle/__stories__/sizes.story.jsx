import React from 'react';
import { SaraSparkle, Text } from '@/index';

export const Sizes = () => {
  return (
    <div className="d-flex vw-50">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <SaraSparkle size={16} />
        <Text appearance="subtle" className="mt-6">
          16
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle size={24} />
        <Text appearance="subtle" className="mt-6">
          24
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle size={32} />
        <Text appearance="subtle" className="mt-6">
          32
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle size={48} />
        <Text appearance="subtle" className="mt-6">
          48
        </Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/AI/Sara Sparkle/Sizes',
  component: SaraSparkle,
  parameters: {
    docs: {
      docPage: {
        title: 'SaraSparkle',
      },
    },
  },
};
