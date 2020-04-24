import * as React from 'react';
import DonutChart from '../DonutChart';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// CSF format story
export const withCenterText = () => {
  return (
    <div
      style={{
        height: '400px',
      }}
    >
      <DonutChart
        data={data}
        withCenterText={true}
        colorOfTotalCount="alert"
      />
    </div>
  );
};

export default {
  title: 'Organisms|DonutChart',
  component: DonutChart
};
