import * as React from 'react';
import { boolean, number, array, text } from '@storybook/addon-knobs';
import { DonutChart } from '@/index';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

// CSF format story
export const customTooltip = () => {
  const withLegends = boolean(
    'withLegends',
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

  const width = number(
    'width',
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
        width={width || undefined}
        colors={colors.length ? colors : undefined}
        colorOfTotalCount={colorOfTotalCount}
        withLegends={withLegends}
        withTooltip={true}
        withActiveSegment={withActiveSegment}
        withCenterText={withCenterText}
        customTooltip={(payload: any) => (
          <div className="DonutChart-tooltip">
            {`${payload.name} ${(+payload.value).toLocaleString()}`}
          </div>
        )}
      />
    </div>
  );
};

const customCode = `() => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  return (
    <div
      style={{
        height: '300px',
      }}
    >
      <DonutChart
        data={data}
        radius={0}
        withTooltip={true}
        customTooltip={(payload) => (
          <>
          {\`\${payload.name} \${(+payload.value).toLocaleString()}\`}
          </>
        )}
      />
    </div>
  )
}`;

export default {
  title: 'Organisms|DonutChart/Variants',
  component: DonutChart,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
