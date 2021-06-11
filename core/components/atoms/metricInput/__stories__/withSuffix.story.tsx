import * as React from 'react';
import { MetricInput, Label } from '@/index';

// CSF format story
export const withSuffix = () => {
  const [value, setValue] = React.useState<React.ReactText>(65);

  return (
    <div className="d-flex align-items-center">
      <Label className="mr-5">Body Height</Label>
      <div style={{ width: 'var(--spacing-6)' }}>
        <MetricInput
          suffix="in"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(65);

  return (
    <div className="d-flex align-items-center">
      <Label className="mr-5">Body Height</Label>
      <div style={{ width: 'var(--spacing-6)' }}>
        <MetricInput
          suffix="in"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/MetricInput/With Suffix',
  component: MetricInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Input',
        props: {
          exclude: ['autocomplete']
        }
      }
    }
  }
};
