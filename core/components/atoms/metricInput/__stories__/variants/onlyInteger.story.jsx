import * as React from 'react';
import { MetricInput, Label, Row, Column } from '@/index';

// CSF format story
export const OnlyInteger = () => {
  const [value, setValue] = React.useState(2000);

  const onKeyDownHandler = (e) => {
    if (/[.]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <Row className="align-items-center">
      <Label htmlFor="metric-input" className="mr-5">
        Year
      </Label>
      <Column size={2}>
        <MetricInput
          id="metric-input"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={onKeyDownHandler}
        />
      </Column>
    </Row>
  );
};

const customCode = `() => {
    const [value, setValue] = React.useState(2000);
  
    const onKeyDownHandler = (e) => {
      if (/[.]/.test(e.key)) {
        e.preventDefault();
      }
    };
  
    return (
      <Row className="align-items-center">
        <Label htmlFor="metric-input" className="mr-5">
          Year
        </Label>
        <Column size={2}>
          <MetricInput
            id="metric-input"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={onKeyDownHandler}
          />
        </Column>
      </Row>
    );
  }`;

export default {
  title: 'Components/MetricInput/Variants/Only Integer',
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
