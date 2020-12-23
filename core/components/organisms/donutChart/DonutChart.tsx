import * as React from 'react';
import classNames from 'classnames';
import { Row, Column, Legend, Utils } from '@/index';
import { ColumnProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
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

export interface DonutChartProps extends BaseProps {
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
   * **Radius will be 70% of the original radius**
   */
  withActiveSegment?: boolean;
  /**
   * Colors of different data index
   */
  colors: string[];
  /**
   * Shows text at the center of `DonutChart`
   */
  withCenterText: boolean;
  /**
   * Color of total count at the center
   */
  colorOfTotalCount: string;
  /**
   * Outer radius of the donut chart
   */
  radius?: number;
  /**
   * Percent w.r.t. radius
   */
  width: number;
  /**
   * Callback to add custom tooltip component
   */
  customTooltip?: (payload: any) => JSX.Element;
}

export const DonutChart = (props: DonutChartProps) => {
  const {
    width,
    colors,
    withCenterText,
    colorOfTotalCount,
    data,
    radius,
    withLegends,
    withTooltip,
    customTooltip,
    withActiveSegment,
    className
  } = props;

  const baseProps = extractBaseProps(props);

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

  const ChartTooltip = (chartProps: any) => {
    const payload = chartProps.payload[0];

    if (payload) {
      if (customTooltip) return customTooltip(payload);

      return (
        <div className="DonutChart-tooltip">
          {`${payload.name}${chartProps.separator}${(+payload.value).toLocaleString()}`}
        </div>
      );
    }
    return null;
  };

  const { colorToHex } = Utils.css;

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
              {total.toLocaleString()}
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
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value.toLocaleString()}`}</text>
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

  const oRadius = withActiveSegment ? (radius ? .7 * radius : '70%') : radius || '100%';
  const iRadius = withActiveSegment ? (radius ? (100 - width) / 100 * (oRadius as number) : `${(100 - width) / 100 * 70}%`) : (radius ? (100 - width) / 100 * radius : `${(100 - width)}%`);
  // const tooltipPayload = data.reduce((out: Data[], curr) => {
  //   out.push({
  //     name: curr.name,
  //     value: (+curr.value).toLocaleString()
  //   });
  //   return out;
  // }, []);

  const classes = classNames({
    ['DonutChart']: true
  }, className);

  return (
    <Row {...baseProps} className={classes}>
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
            {withTooltip && <Tooltip separator=": " content={<ChartTooltip />} />}
          </PieChart>
        </ResponsiveContainer>
      </Column>
      {withLegends && (
        <Column className="DonutChart-legends" {...columnOptions.legends}>
          {data.map((d, i) => (
            <Legend key={i} iconAppearance={getColor(i)}>
              {`${d.name} - ${(+d.value).toLocaleString()}`}
            </Legend>
          ))}
        </Column>
      )}
    </Row>
  );
};

DonutChart.displayName = 'DonutChart';
DonutChart.defaultProps = {
  width: 20,
  colors: ['primary', 'secondary', 'success', 'warning', 'alert'],
  withCenterText: true,
  colorOfTotalCount: 'success',
};

export default DonutChart;
