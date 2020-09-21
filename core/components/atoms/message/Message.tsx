import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Heading from '@/components/atoms/heading';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
const IconMapping = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error',
};

export interface MessageProps extends BaseProps {
  /**
   * Color of `Message`
   */
  appearance: Appearance;
  /**
   * Title of the `Message`
   */
  title?: string;
  /**
   * Element to be rendered
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
}

export const Message = (props: MessageProps) => {
  const {
    appearance,
    title,
    children,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const MessageClass = classNames({
    ['Message']: true,
    [`Message--${appearance}`]: appearance,
  }, className);

  const MessageIcon = classNames({
    ['Message-icon']: true,
    [`Message-icon--${appearance}`]: appearance,
    ['Message-icon--withTitle']: title,
  });

  return (
    <div data-test="DesignSystem-Message"{...baseProps} className={MessageClass}>
      {appearance !== 'default' && (
        <div className={MessageIcon} data-test="DesignSystem-Message--Icon">
          <Icon name={IconMapping[appearance]} appearance={appearance} />
        </div>
      )}
      <div data-test="DesignSystem-Message--Title">
        {title && (
          <div className="Message-title">
            <Heading size="s">{title}</Heading></div>
        )}
        <div data-test="DesignSystem-Message--Description" className="Message-description">{children}</div>
      </div>
    </div>
  );
};

Message.displayName = 'Message';
Message.defaultProps = {
  appearance: 'default'
};

export default Message;
