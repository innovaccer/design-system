import * as React from 'react';
import { MetricInput, Text, Row, Column } from '@/index';

// CSF format story
export const size = () => (
  <Row>
    <Column size={2} className="d-flex">
      <div className="flex-column align-items-center mr-8">
        <MetricInput aria-label="Metric input regular size" size="regular" className="mb-3" />
        <Text>Regular</Text>
      </div>
      <div className="flex-column align-items-center">
        <MetricInput aria-label="Metric input large size" size="large" className="mb-3" />
        <Text>Large</Text>
      </div>
    </Column>
  </Row>
);

export default {
  title: 'Components/Input/MetricInput/Variants/Size',
  component: MetricInput,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
