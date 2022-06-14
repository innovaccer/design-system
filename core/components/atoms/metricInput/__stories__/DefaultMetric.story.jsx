import * as React from 'react';
import { MetricInput, Label } from '@/index';

// CSF format story
export const defaultMetric = () => {
  const [value, setValue] = React.useState(15);

  return (
    <div className="d-flex align-items-center">
      <Label htmlFor="metric-input" className="mr-5">
        No. of Days
      </Label>
      <div style={{ width: 'var(--spacing-6)' }}>
        <MetricInput
          id="metric-input"
          name="metric-input"
          size="regular"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(15);

  return (
    <div className="d-flex align-items-center">
      <Label htmlFor="metric-input" className="mr-5"> No. of Days </Label>
      <div style={{ width: 'var(--spacing-6)' }}>
        <MetricInput
          id="metric-input"
          name="metric-input"
          size="regular"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/MetricInput/Default Metric',
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
