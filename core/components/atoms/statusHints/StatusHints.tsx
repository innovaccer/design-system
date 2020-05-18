import * as React from 'react';
import Text from '@/components/atoms/text';
import classNames from 'classnames';

export type Appearance = 'info' | 'alert' | 'warning' | 'success' | 'default';

export interface StatusHintsProps {
  /**
   * Describes label of the `StatusHints`
   */
  children: string;
  /**
   * Color of Icon
   * @default "inverse"
   */
  appearance?: Appearance;
  /**
   * Adds custom CSS to `StatusHints`
   */
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const StatusHints = (props: StatusHintsProps) => {
  const {
    appearance = 'default',
    children,
    onMouseEnter,
    onMouseLeave,
    onClick,
    style,
  } = props;

  const StatusHintsClass = classNames({
    ['StatusHints']: true,
  });

  const StatusHintsIconClass = classNames({
    ['StatusHints-icon']: true,
    [`StatusHints--${appearance}`]: appearance,
  });

  return (
    <div
      className={StatusHintsClass}
      onClick={e => onClick && onClick(e)}
      onMouseEnter={e => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={e => onMouseLeave && onMouseLeave(e)}
      style={style}
    >
      <span className={StatusHintsIconClass} />
      <Text weight={'medium'}>{children}</Text>
    </div>
  );
};

StatusHints.displayName = 'StatusHints';

export default StatusHints;
