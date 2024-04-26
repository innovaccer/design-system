import * as React from 'react';
import { MetricInput, Row, Column } from '@/index';

// CSF format story
export const controlledMetricInput = () => {
  const [value, setValue] = React.useState(10);

  return (
    <Row>
      <Column size={1}>
        <MetricInput
          aria-label="Metric Input Label"
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
  const [value, setValue] = React.useState(10);

  return (
    <Row>
      <Column size={1}>
        <MetricInput
          aria-label="Metric Input Label"
          value={value}
          onChange={(e) => { setValue(e.target.value) }}
        />
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Components/Input/MetricInput/Variants/Controlled Metric Input',
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
