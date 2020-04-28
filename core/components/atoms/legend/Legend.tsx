import * as React from 'react';
import Text, { Appearance as LabelAppearance, } from '@/components/atoms/text';
import classNames from 'classnames';

export interface LegendProps {
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
    iconAppearance = 'inverse',
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
    background: `var(--${iconAppearance})`,
    height: `${iconSize}px`,
    width: `${iconSize}px`,
  };

  return (
    <div
      className={legendClass}
      onClick={e => onClick && onClick(e)}
      onMouseEnter={e => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={e => onMouseLeave && onMouseLeave(e)}
      style={style}
    >
      <span className="Legend-icon" style={styles} />
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
