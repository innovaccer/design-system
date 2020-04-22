import * as React from 'react';
import { IconType } from '@/components/atoms/icon';
import Text, { Appearance as LabelAppearance, } from '@/components/atoms/text';
import classNames from 'classnames';

export interface LegendProps {
  /**
   * Name of icon to be rendered inside `Legend`
   * @default "fiber_manual_record"
   */
  icon?: string;
  /**
   * Describes label of the `Legend`
   */
  label: string;
  /**
   * Color of Icon
   * @default "inverse"
   */
  iconAppearance?: string;
  /**
   * Color of label
   */
  labelAppearance?: LabelAppearance;
  /**
   * Type of Icon
   * @default "filled"
   */
  iconType?: IconType;
  /**
   * Size of Icon
   * @default 14
   */
  iconSize?: number;
  /**
   * Denotes weight of `text`
   */
  labelWeight?: 'strong' | 'medium';
  /**
   * Adds custom CSS to `Legend`
   */
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Legend = (props: LegendProps) => {
  const {
    icon = 'fiber_manual_record',
    iconAppearance = 'inverse',
    iconType = 'filled',
    iconSize = 14,
    labelAppearance,
    label,
    labelWeight,
    onMouseEnter,
    onMouseLeave,
    onClick,
    style,
  } = props;

  const legendClass = classNames({
    ['Legend']: true,
  });

  const styles = {
    color: `var(--${iconAppearance})`,
    fontSize: `${iconSize}px`,
    width: `${iconSize}px`,
    marginRight: 'var(--spacing)',
  };

  return (
    <div
      className={legendClass}
      onClick={e => onClick && onClick(e)}
      onMouseEnter={e => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={e => onMouseLeave && onMouseLeave(e)}
      style={style}
    >
      <i
        className={'material-icons'}
        style={styles}
      >
        {`${icon}_${iconType}`}
      </i>
      <Text
        appearance={labelAppearance}
        weight={labelWeight}
      >
        {label}
      </Text>
    </div>
  );
};

Legend.displayName = 'Legend';

export default Legend;
