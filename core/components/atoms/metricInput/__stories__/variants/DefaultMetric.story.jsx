import * as React from 'react';
import { MetricInput, Label, Row, Column } from '@/index';

// CSF format story
export const defaultMetric = () => {
  const [value, setValue] = React.useState(15);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">
        No. of Days
      </Label>
      <Column size={1}>
        <MetricInput
          id="metric-input"
          name="metric-input"
          size="regular"
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
  const [value, setValue] = React.useState(15);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">  No. of Days </Label>
      <Column size={1}>
        <MetricInput
          id="metric-input"
          name="metric-input"
          size="regular"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
        </Column>
    </Row>
  );
}`;

export default {
  title: 'Components/Input/MetricInput/Variants/Default Metric',
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
