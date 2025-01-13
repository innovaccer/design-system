import * as React from 'react';
import { Meter, Text } from '@/index';

// CSF format story
export const multiColor = () => {
  return (
    <div className="d-flex flex-column">
      <Meter
        value={80}
        meterSize="large"
        stepCount={5}
        showLabel={false}
        fillColor={[...Array(3).fill('info'), ...Array(1).fill('alert')]}
      />
      <Text size="small" appearance="subtle" className="mt-6">
        3 batches completed
      </Text>
      <Text size="small" appearance="subtle" className="mt-2">
        1 batch failed
      </Text>
      <Text size="small" appearance="subtle" className="mt-2">
        1 batch pending
      </Text>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex flex-column">
      <Meter
        value={80}
        meterSize="large"
        stepCount={5}
        showLabel={false}
        fillColor={[...Array(3).fill('info'), ...Array(1).fill('alert')]}
      />
      <Text size="small" appearance="subtle" className="mt-6">
        3 batches completed
      </Text>
      <Text size="small" appearance="subtle" className="mt-2">
        1 batch failed
      </Text>
      <Text size="small" appearance="subtle" className="mt-2">
        1 batch pending
      </Text>
    </div>
  );
}`;

export default {
  title: 'Components/Meter/Multi Color',
  component: Meter,
  parameters: {
    docs: {
      docPage: {
        title: 'Meter',
        customCode,
      },
    },
  },
};
