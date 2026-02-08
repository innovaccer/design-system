import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps, OmitNativeProps } from '@/utils/types';
import useAccessibilityProps from '@/accessibility/utils/useAccessibilityProps';
import { SharedProps } from './ChatMessage';
import styles from '@css/components/chat.module.css';

export interface BoxProps extends BaseProps, OmitNativeProps<HTMLDivElement, 'onClick'> {
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
  const {
    children,
    type,
    isTyping,
    statusType,
    withStatus,
    onClick,
    className,
    role,
    tabIndex,
    onKeyDown,
    'aria-label': ariaLabel,
    ...rest
  } = props;

  const baseProps = extractBaseProps(props);
  const accessibilityProps = onClick
    ? useAccessibilityProps({
        onClick,
        onKeyDown,
        role,
        tabIndex,
        'aria-label': ariaLabel,
      })
    : {};

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

  return (
    <div
      {...baseProps}
      {...rest}
      {...accessibilityProps}
      className={MessageClass}
      data-test="DesignSystem-ChatMessage--Box"
    >
      {children}
    </div>
  );
};

Box.displayName = 'Box';
export default Box;
