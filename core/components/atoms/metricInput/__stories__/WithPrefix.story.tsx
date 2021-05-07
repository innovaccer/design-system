import * as React from 'react';
import { MetricInput, Label } from '@/index';

// CSF format story
export const withPrefix = () => (
  <div className="d-flex align-items-center">
    <Label className="mr-5">Cost</Label>
    <div style={{ width: 'var(--spacing-7)' }}>
      <MetricInput
        prefix="USD"
      />
    </div>
  </div>
);

export default {
  title: 'Components/MetricInput/With Prefix',
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
