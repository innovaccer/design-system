import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { SharedProps } from './ChatMessage';

export interface BoxProps extends BaseProps {
  /**
   * Callback function called when chat message is clicked.
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface BoxBaseProps {
  withStatus?: boolean;
  children: React.ReactNode;
}

export type InternalBoxProps = BoxProps & BoxBaseProps & SharedProps;

export const Box = (props: InternalBoxProps) => {
  const { children, type, isTyping, statusType, withStatus, onClick, className } = props;

  const baseProps = extractBaseProps(props);

  const MessageClass = classNames(
    {
      ['Box']: true,
      [`Box--${type}`]: type,
      ['Box--typing']: isTyping,
      ['Box--urgent']: statusType === 'urgent',
      [`Box-${type}--withStatus`]: withStatus || isTyping,
    },
    className
  );

  return (
    <div {...baseProps} className={MessageClass} onClick={onClick}>
      {children}
    </div>
  );
};

Box.displayName = 'Box';
export default Box;
