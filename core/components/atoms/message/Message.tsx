import * as React from 'react';
import classNames from 'classnames';
import { Icon, Heading, Text } from '@/index';
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
   *
   * **Soon to be deprecated. Please use description prop**
   * @type {React.ReactNode}
   */
  children?: React.ReactNode;
  /**
   * Description of `Message`
   */
  description: string;
  /**
   * Action links to be added inside `Message`
   */
  actions?: React.ReactNode;
}

export const Message = (props: MessageProps) => {
  const {
    appearance,
    actions,
    title,
    className
  } = props;

  const baseProps = extractBaseProps(props);

  const MessageClass = classNames({
    ['Message']: true,
    [`Message--${appearance}`]: appearance,
  }, className);

  const IconClass = classNames({
    ['Message-icon']: true,
    [`Message-icon--${appearance}`]: appearance,
    ['Message-icon--withTitle']: title,
  });

  const TitleClass = classNames({
    ['Message-heading']: true,
    [`Message-heading--${appearance}`]: appearance
  });

  const DescriptionClass = classNames({
    ['Message-text']: true,
    [`Message-text--${appearance}`]: appearance
  });

  const renderDescription = (description: string, children: React.ReactNode) => {
    if (description || typeof (children) === 'string') {
      return (
        <Text
          data-test="DesignSystem-Message--Description"
          className={DescriptionClass}
        >
          {description || (typeof (children) === 'string' ? children : '')}
        </Text>
      );
    }

    if (children) {
      return <div data-test="DesignSystem-Message--Description" className="Message-description">{children}</div>;
    }

    return null;
  };

  return (
    <div data-test="DesignSystem-Message" {...baseProps} className={MessageClass}>
      {appearance !== 'default' && (
        <Icon
          data-test="DesignSystem-Message--Icon"
          name={IconMapping[appearance]}
          appearance={appearance}
          className={IconClass}
        />
      )}
      <div>
        {title && (
          <Heading data-test="DesignSystem-Message--Title" size="s" className={TitleClass}>{title}</Heading>
        )}
        {renderDescription(props.description, props.children)}
        {actions && <div data-test="DesignSystem-Message--actions" className="Message-actions">{actions}</div>}
      </div>
    </div>
  );
};

Message.displayName = 'Message';
Message.defaultProps = {
  appearance: 'default',
  description: ''
};

export default Message;
