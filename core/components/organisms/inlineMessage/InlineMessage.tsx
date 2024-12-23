import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
import styles from '@css/components/inlineMessage.module.css';

const IconMapping = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error',
};

export type MessageSize = 'regular' | 'small';

export interface InlineMessageProps extends BaseProps {
  /**
   * Color of `Inline Message`
   *
   * `default` appearance is soon to be deprecated
   */
  appearance: MessageAppearance;
  /**
   * Description of `Inline Message`
   */
  description: string;
  /**
   * Size of `Inline Message`
   */
  size: MessageSize;
}

export const InlineMessage = (props: InlineMessageProps) => {
  const { appearance, className, description, size } = props;

  const baseProps = extractBaseProps(props);

  const InlineMessageClass = classNames(
    {
      [styles['InlineMessage']]: true,
    },
    className
  );

  const IconClass = classNames({
    [styles['InlineMessage-icon--warning']]: appearance === 'warning',
    [styles['InlineMessage-icon--small']]: size === 'small',
    [styles['InlineMessage-icon--regular']]: size === 'regular',
  });

  const DescriptionClass = classNames({
    [styles[`InlineMessage-text--${appearance}`]]: appearance,
  });

  const IconSize = size === 'small' ? 14 : 16;
  const TextWeight = size === 'small' ? 'medium' : undefined;

  return (
    <div data-test="DesignSystem-InlineMessage" {...baseProps} className={InlineMessageClass}>
      {appearance !== 'default' && (
        <Icon
          data-test="DesignSystem-InlineMessage--Icon"
          name={IconMapping[appearance]}
          appearance={appearance}
          className={IconClass}
          size={IconSize}
        />
      )}
      <Text
        size={size}
        weight={TextWeight}
        className={DescriptionClass}
        data-test="DesignSystem-InlineMessage--Description"
      >
        {description}
      </Text>
    </div>
  );
};

InlineMessage.displayName = 'InlineMessage';
InlineMessage.defaultProps = {
  appearance: 'default',
  description: '',
  size: 'regular',
};

export default InlineMessage;
