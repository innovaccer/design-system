import * as React from 'react';
import classNames from 'classnames';
import { Icon, Heading, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
import styles from '@css/components/message.module.css';

const IconMapping = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error',
};

type MessageSize = 'small' | 'regular';

export interface MessageProps extends BaseProps {
  /**
   * Color of `Message`
   */
  appearance: MessageAppearance;
  /**
   * Title of the `Message`
   */
  title?: string;
  /**
   * Size of `Message`
   */
  size?: MessageSize;
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
  const { actions, title, className, size = 'regular' } = props;
  let { appearance } = props;
  appearance = appearance === 'default' ? 'info' : appearance;

  const baseProps = extractBaseProps(props);

  const MessageClass = classNames(
    {
      [styles['Message']]: true,
      [styles[`Message--${appearance}`]]: appearance,
      [styles[`Message--${size}`]]: size && size === 'small',
    },
    className
  );

  const IconClass = classNames({
    [styles[`Message-icon--${appearance}`]]: appearance,
    [styles[`Message-icon--${size}`]]: size,
    [styles['Message-icon--withTitle']]: title,
  });

  const TitleClass = classNames({
    [styles[`Message-heading--${appearance}`]]: appearance,
    [styles[`Message-heading--${size}`]]: size,
  });

  const DescriptionClass = classNames({
    [styles[`Message-text--${appearance}`]]: appearance,
    [styles[`Message-text--${size}`]]: size,
  });

  const ActionsClass = classNames({
    [styles['Message-actions']]: true,
    [styles[`Message-actions--${size}`]]: size,
  });

  const renderDescription = (description: string, children: React.ReactNode) => {
    if (description || typeof children === 'string') {
      return (
        <Text data-test="DesignSystem-Message--Description" className={DescriptionClass}>
          {description || (typeof children === 'string' ? children : '')}
        </Text>
      );
    }

    if (children) {
      return (
        <div data-test="DesignSystem-Message--Description" className={styles['Message-description']}>
          {children}
        </div>
      );
    }

    return null;
  };

  return (
    <div data-test="DesignSystem-Message" {...baseProps} className={MessageClass}>
      <Icon
        data-test="DesignSystem-Message--Icon"
        name={IconMapping[appearance]}
        size={size === 'small' ? 14 : 16}
        appearance={appearance}
        className={IconClass}
      />
      <div>
        {title && (
          <Heading data-test="DesignSystem-Message--Title" size="s" className={TitleClass}>
            {title}
          </Heading>
        )}
        {renderDescription(props.description, props.children)}
        {actions && (
          <div data-test="DesignSystem-Message--actions" className={ActionsClass}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
};

Message.displayName = 'Message';
Message.defaultProps = {
  appearance: 'info',
  description: '',
};

export default Message;
