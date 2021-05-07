import * as React from 'react';
import { MetricInput, Label } from '@/index';

// CSF format story
export const withSuffix = () => (
  <div className="d-flex align-items-center">
    <Label className="mr-5">Body Height</Label>
    <div style={{ width: 'var(--spacing-6)' }}>
      <MetricInput
        suffix="in"
      />
    </div>
  </div>
);

export default {
  title: 'Components/MetricInput/With Suffix',
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
