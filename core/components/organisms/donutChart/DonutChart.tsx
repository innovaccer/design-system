import * as React from 'react';
import { Row, Column, Legend } from '@/index';
import { ColumnProps } from '@/index.type';
import { colorToHex } from '@/utils';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Sector,
} from 'recharts';

export interface Data {
  name: string;
  value: any;
}

export interface DonutChartProps {
  /**
   * Data object
   */
  data: Data[];
  /**
   * Show legends along with the chart
   */
  withLegends?: boolean;
  /**
   * Show tooltip on hovering chart
   */
  withTooltip?: boolean;
  /**
   * Show active Segment on hovering chart
   *
   * **Radius will be 72.5% of the original radius**
   */
  withActiveSegment?: boolean;
  /**
   * Colors of different data index
   */
  colors?: string[];
  /**
   * Shows text at the center of `DonutChart`
   * @default true
   */
  withCenterText: boolean;
  /**
   * Color of total count at the center
   */
  colorOfTotalCount?: string;
  /**
   * Outer radius of the donut chart
   */
  radius?: number;
  /**
   * Percent w.r.t. radius
   * @default 20
   */
  donutWidth?: number;
}

export const DonutChart = (props: DonutChartProps) => {
  const {
    donutWidth = 20,
    colors = ['primary', 'secondary', 'inverse', 'success', 'warning', 'alert'],
    withCenterText = true,
    colorOfTotalCount = 'success',
    data,
    radius,
    withLegends,
    withTooltip,
    withActiveSegment
  } = props;

  const columnOptions: Record<string, ColumnProps> = {
    chart: {
      size: withLegends ? '9' : '12',
      sizeS: '12',
      sizeXS: '12',
    },
    legends: {
      size: '3',
      sizeS: '12',
      sizeXS: '12'
    }
  };

  const renderActiveShape = (activeShapeProps: any) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = activeShapeProps;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    const total = Math.ceil(value / percent);

    return (
      <g>
        {withCenterText && (
          <>
          <text x={cx} y={cy} font-size={'var(--font-size-xl)'} textAnchor="middle">Total</text>
          <text
            x={cx}
            y={cy}
            dy={22}
            font-size={'var(--font-size-l)'}
            textAnchor="middle"
            fill={colorToHex(colorOfTotalCount)}
          >
            {total}
          </text>
          </>
        )}

        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        {withActiveSegment && (
          <>
            <Sector
              cx={cx}
              cy={cy}
              startAngle={startAngle}
              endAngle={endAngle}
              innerRadius={outerRadius + 6}
              outerRadius={outerRadius + 10}
              fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={-18} textAnchor={textAnchor} fill={fill}>{`${payload.name}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
              {`${(percent * 100).toFixed(0)}%`}
            </text>
          </>
        )}
      </g>
    );
  };

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (_data: Data[], index: number) => {
    setActiveIndex(index);
  };

  const getColor = (index: number, type?: 'hex' | 'string') => {
    const color = colors[index % colors.length];
    const colorHex = colorToHex(color);

    return (type === 'hex') ? colorHex : color;
  };

  const oRadius = withActiveSegment ? (radius ? .725 * radius : '72.5%') : radius || '100%';
  const iRadius = withActiveSegment ? (radius ? (100 - donutWidth) / 100 * (oRadius as number) : `${(100 - donutWidth) / 100 * 72.5}%`) : (radius ? (100 - donutWidth) / 100 * radius : `${(100 - donutWidth)}%`);

  return (
    <Row utilityClass="DonutChart">
      <Column {...columnOptions.chart}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              onMouseEnter={onPieEnter}
              outerRadius={oRadius}
              innerRadius={iRadius}
            >
              {
                data.map((_entry, index) => <Cell fill={getColor(index, 'hex')} key={index} />)
              }
            </Pie>
            {withTooltip && <Tooltip />}
          </PieChart>
        </ResponsiveContainer>
      </Column>
      {withLegends && (
        <Column utilityClass="DonutChart-legends" {...columnOptions.legends}>
          {data.map((d, i) => <Legend key={i} label={`${d.name} - ${d.value}`} iconAppearance={getColor(i)} />)}
        </Column>
      )}
    </Row>
  );
};

export default DonutChart;
