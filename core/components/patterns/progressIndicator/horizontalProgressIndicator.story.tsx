import * as React from 'react';
import { SaraSparkle, Text } from '@/index';

export const Horizontal = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <SaraSparkle size={24} state="listening" className="mr-3" />
      <Text className="shimmer-text">Sara is listening</Text>
    </div>
  );
};

export default {
  title: 'Components/AI/Progress Indicator/Horizontal',
  parameters: {
    docs: {
      docPage: {
        title: 'Progress Indicator - Horizontal',
        noProps: true,
      },
    },
  },
};
