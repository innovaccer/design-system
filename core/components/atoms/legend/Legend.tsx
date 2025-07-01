import * as React from 'react';
import Text, { TextAppearance } from '@/components/atoms/text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import legendStyles from '@css/components/legend.module.css';

export interface LegendProps extends BaseProps {
  /**
   * Describes label of the `Legend`
   */
  children: string | number;
  /**
   * Color of Icon
   */
  iconAppearance: string;
  /**
   * Color of label
   */
  labelAppearance?: TextAppearance;
  /**
   * Size of Icon
   */
  iconSize: number;
  /**
   * Denotes weight of `text`
   */
  labelWeight?: 'strong' | 'medium';
  /**
   * Handler to be called when `Legend` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer enters `Legend`.
   */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Legend`.
   */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Legend = (props: LegendProps) => {
  const {
    iconAppearance,
    iconSize,
    labelAppearance,
    children,
    labelWeight,
    onMouseEnter,
    onMouseLeave,
    onClick,
    className,
  } = props;

  const baseProps = extractBaseProps(props);

  const legendClass = classNames(
    {
      [legendStyles['Legend']]: true,
    },
    className
  );

  const styles = {
    background: `var(--${iconAppearance})`,
    height: `${iconSize}px`,
    width: `${iconSize}px`,
  };

  // TODO(a11y): fix accessibility
  /* eslint-disable */
  return (
    <div
      {...baseProps}
      className={legendClass}
      onClick={(e) => onClick && onClick(e)}
      onMouseEnter={(e) => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={(e) => onMouseLeave && onMouseLeave(e)}
    >
      {/* eslint-enable */}
      <span className={legendStyles['Legend-icon']} style={styles} />
      <Text appearance={labelAppearance} weight={labelWeight}>
        {children}
      </Text>
    </div>
  );
};

Legend.displayName = 'Legend';
Legend.defaultProps = {
  iconAppearance: 'inverse',
  iconSize: 16,
};

export default Legend;
