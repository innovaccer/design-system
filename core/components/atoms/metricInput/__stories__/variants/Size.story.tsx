import * as React from 'react';
import { MetricInput, Text } from '@/index';

// CSF format story
export const size = () => (
  <div className="d-flex" style={{ width: 'var(--spacing-8)' }}>
    <div className="d-flex flex-column align-items-center mr-8">
      <MetricInput aria-label="Metric input regular size" size="regular" className="mb-3" />
      <Text>Regular</Text>
    </div>
    <div className="d-flex flex-column align-items-center">
      <MetricInput aria-label="Metric input large size" size="large" className="mb-3" />
      <Text>Large</Text>
    </div>
  </div>
);

export default {
  title: 'Components/MetricInput/Variants/Size',
  component: MetricInput,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
