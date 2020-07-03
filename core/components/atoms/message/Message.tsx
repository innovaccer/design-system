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
   * @default "default"
   */
  appearance?: Appearance;
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

export const Message: React.FunctionComponent<MessageProps> = props => {
  const {
    appearance = 'default',
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
    <div {...baseProps} className={MessageClass}>
      {appearance !== 'default' && (
        <div className={MessageIcon}>
          <Icon name={IconMapping[appearance]} appearance={appearance}/>
        </div>
      )}
      <div>
        {title && <div className="Message-title"><Heading size="s">{title}</Heading></div>}
        <div className="Message-description">{children}</div>
      </div>
    </div>
  );
};

Message.displayName = 'Message';

export default Message;
