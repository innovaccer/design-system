import * as React from 'react';
import classNames from 'classnames';
import Icon from '@/components/atoms/icon';
import Heading from '@/components/atoms/heading';

export type Appearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
const IconMapping = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error',
};

export interface MessageProps {
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
  } = props;

  const MessageClass = classNames({
    ['Message']: true,
    [`Message--${appearance}`]: appearance,
  });

  const MessageIcon = classNames({
    ['Message-icon']: true,
    [`Message-icon--${appearance}`]: appearance,
    ['Message-icon--withTitle']: title,
  });

  return (
    <div className={MessageClass}>
      {appearance !== 'default' && (
        <div className={MessageIcon}>
          <Icon name={IconMapping[appearance]} size={16} appearance={appearance}/>
        </div>
      )}
      <div>
        {title && <div className="Message-title"><Heading>{title}</Heading></div>}
        <div className="Message-description">{children}</div>
      </div>
    </div>
  );
};

export default Message;
