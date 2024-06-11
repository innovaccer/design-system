import * as React from 'react';
import { SaraSparkle, Text } from '@/index';

export const Vertical = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column">
      <SaraSparkle size={48} state="listening" className="mb-3" />
      <Text className="shimmer-text" size="large">
        Sara is listening
      </Text>
    </div>
  );
};

export default {
  title: 'Components/AI/Progress Indicator/Vertical',
  parameters: {
    docs: {
      docPage: {
        title: 'Progress Indicator - Vertical',
        noProps: true,
      },
    },
  },
};
