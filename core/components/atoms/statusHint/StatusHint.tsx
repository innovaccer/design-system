import * as React from 'react';
import Text from '@/components/atoms/text';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'info' | 'alert' | 'warning' | 'success' | 'default';

export interface StatusHintProps extends BaseProps {
  /**
   * Describes label of the `Status Hint`
   */
  children: React.ReactText;
  /**
   * Color of Icon
   * @default "inverse"
   */
  appearance?: Appearance;
  /**
   * Handler to be called when `Status Hint` is clicked
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer enters `Status Hint`.
   */
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * Handler to be called when mouse pointer leaves `Status Hint`.
   */
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const StatusHint = (props: StatusHintProps) => {
  const {
    appearance = 'default',
    children,
    onMouseEnter,
    onMouseLeave,
    onClick,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const StatusHintClass = classNames({
    ['StatusHint']: true,
  }, className);

  const StatusHintIconClass = classNames({
    ['StatusHint-icon']: true,
    [`StatusHint--${appearance}`]: appearance,
  });

  return (
    <div
      {...baseProps}
      className={StatusHintClass}
      onClick={e => onClick && onClick(e)}
      onMouseEnter={e => onMouseEnter && onMouseEnter(e)}
      onMouseLeave={e => onMouseLeave && onMouseLeave(e)}
    >
      <span className={StatusHintIconClass} />
      <Text weight={'medium'}>{children}</Text>
    </div>
  );
};

StatusHint.displayName = 'StatusHint';

export default StatusHint;
