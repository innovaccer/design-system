import * as React from 'react';
import { MetricInput } from '@/index';

// CSF format story
export const controlledMetricInput = () => {
  const [value, setValue] = React.useState<React.ReactText>(10);

  return (
    <div style={{ width: 'var(--spacing-6)' }}>
      <MetricInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(10);

  return (
    <div style={{ width: 'var(--spacing-6)' }}>
      <MetricInput
        value={value}
        onChange={(e) => { setValue(e.target.value) }}
      />
    </div>
  );
}`;

export default {
  title: 'Components/MetricInput/Variants/Controlled Metric Input',
  component: MetricInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
