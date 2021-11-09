import * as React from 'react';
import { MetricInput, Label } from '@/index';

// CSF format story
export const withPrefix = () => {
  const [value, setValue] = React.useState<React.ReactText>(625);

  return (
    <div className="d-flex align-items-center">
      <Label htmlFor="metric-input" className="mr-5">
        Cost
      </Label>
      <div style={{ width: 'var(--spacing-7)' }}>
        <MetricInput
          id="metric-input"
          prefix="USD"
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
  const [value, setValue] = React.useState(625);

  return (
    <div className="d-flex align-items-center">
      <Label htmlFor="metric-input" className="mr-5">Cost</Label>
      <div style={{ width: 'var(--spacing-7)' }}>
        <MetricInput
          id="metric-input"
          prefix="USD"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/MetricInput/With Prefix',
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
