import * as React from 'react';
import { MetricInput, Label, Row, Column } from '@/index';

// CSF format story
export const withSuffix = () => {
  const [value, setValue] = React.useState(65);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">
        Body Height
      </Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          suffix="in"
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
  const [value, setValue] = React.useState(65);

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">Body Height</Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          suffix="in"
          value={value}
          onChange={e => { setValue(e.target.value); }}
        />
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Components/Input/MetricInput/Variants/With Suffix',
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
