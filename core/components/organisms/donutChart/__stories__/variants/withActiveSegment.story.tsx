import * as React from 'react';
import DonutChart from '../../DonutChart';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// CSF format story
export const withActiveSegment = () => {
  return (
    <div
      style={{
        height: '300px',
      }}
    >
      <DonutChart
        data={data}
        withActiveSegment={true}
      />
    </div>
  );
};

export default {
  title: 'Components/DonutChart/Variants/With Active Segment',
  component: DonutChart,
  parameters: {
    docs: {
      docPage: {
        title: 'DonutChart'
      }
    }
  }
};
