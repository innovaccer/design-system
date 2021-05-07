import * as React from 'react';
import { MetricInput, Label } from '@/index';

// CSF format story
export const defaultMetric = () => (
  <div className="d-flex align-items-center">
    <Label className="mr-5">No. of Days</Label>
    <div style={{ width: 'var(--spacing-6)' }}>
      <MetricInput
        size="regular"
      />
    </div>
  </div>
);

export default {
  title: 'Components/MetricInput/Default Metric',
  component: MetricInput,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete']
        }
      }
    }
  }
};
