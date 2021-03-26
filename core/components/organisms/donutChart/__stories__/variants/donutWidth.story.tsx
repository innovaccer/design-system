import * as React from 'react';
import DonutChart from '../../DonutChart';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// CSF format story
export const donutWidth = () => {
  return (
    <div
      style={{
        height: '400px',
      }}
    >
      <DonutChart
        data={data}
        width={50}
      />
    </div>
  );
};

export default {
  title: 'Components/DonutChart/Variants/Donut Width',
  component: DonutChart,
  parameters: {
    docs: {
      docPage: {
        title: 'DonutChart'
      }
    }
  }
};
