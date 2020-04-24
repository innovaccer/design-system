import * as React from 'react';
import { boolean, number, array, text } from '@storybook/addon-knobs';
import DonutChart from '../DonutChart';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// CSF format story
export const all = () => {
  const withLegends = boolean(
    'withLegends',
    true
  );

  const withTooltip = boolean(
    'withTooltip',
    true
  );

  const withActiveSegment = boolean(
    'withActiveSegment',
    false
  );

  const withCenterText = boolean(
    'withCenterText',
    false
  );

  const radius = number(
    'radius',
    0
  );

  const donutWidth = number(
    'donutWidth',
    0
  );

  const colors = array(
    'colors',
    []
  );

  const colorOfTotalCount = text(
    'colorOfTotalCount',
    ''
  );

  return (
    <div
      style={{
        height: '300px',
      }}
    >
      <DonutChart
        data={data}
        radius={radius}
        donutWidth={donutWidth || undefined}
        colors={colors.length ? colors : undefined}
        colorOfTotalCount={colorOfTotalCount}
        withLegends={withLegends}
        withTooltip={withTooltip}
        withActiveSegment={withActiveSegment}
        withCenterText={withCenterText}
      />
    </div>
  );
};

export default {
  title: 'Organisms|DonutChart',
  component: DonutChart
};
