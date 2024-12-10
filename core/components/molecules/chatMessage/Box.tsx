import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { SharedProps } from './ChatMessage';
import styles from '@css/components/chat.module.css';

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
      [styles['Box']]: true,
      [styles[`Box--${type}`]]: type,
      [styles['Box--typing']]: isTyping,
      [styles['Box--urgent']]: statusType === 'urgent',
      [styles[`Box-${type}--withStatus`]]: withStatus || isTyping,
    },
    className
  );

  /* TODO(a11y): fix accessibility  */
  /* eslint-disable  */
  return (
    <div {...baseProps} className={MessageClass} onClick={onClick} data-test="DesignSystem-ChatMessage--Box">
      {children}
    </div>
  );
  /* eslint-enable  */
};

Box.displayName = 'Box';
export default Box;
