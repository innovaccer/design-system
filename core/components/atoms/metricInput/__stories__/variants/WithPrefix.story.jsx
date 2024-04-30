import * as React from 'react';
import { MetricInput, Label, Row, Column } from '@/index';

// CSF format story
export const withPrefix = () => {
  const [value, setValue] = React.useState(625);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">
        Cost
      </Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          prefix="USD"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </Column>
    </Row>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState(625);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">Cost</Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          prefix="USD"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Components/Input/MetricInput/Variants/With Prefix',
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
