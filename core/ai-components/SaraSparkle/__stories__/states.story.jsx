import React from 'react';
import { SaraSparkle, Text } from '@/index';

export const States = () => {
  return (
    <div className="d-flex vw-50">
      <div className="d-flex flex-column align-items-center text-align-center w-100">
        <SaraSparkle size={64} />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="listening" size={64} />
        <Text appearance="subtle" className="mt-6">
          Listening
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="short-processing" size={64} />
        <Text appearance="subtle" className="mt-6">
          Short Processing
        </Text>
      </div>
      <div className="d-flex align-items-center flex-column text-align-center w-100">
        <SaraSparkle state="long-processing" size={64} />
        <Text appearance="subtle" className="mt-6">
          Long Processing
        </Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/AI/Sara Sparkle/States',
  component: SaraSparkle,
  parameters: {
    docs: {
      docPage: {
        title: 'SaraSparkle',
      },
    },
  },
};
