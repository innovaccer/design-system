import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Appearance = 'default' | 'alert' | 'info' | 'success' | 'warning';
const IconMapping = {
  success: 'check_circle',
  info: 'info',
  warning: 'warning',
  alert: 'error',
};

export interface InlineMessageProps extends BaseProps {
  /**
   * Color of `Inline Message`
   */
  appearance: Appearance;
  /**
   * Description of `Inline Message`
   */
  description: string;
}

export const InlineMessage = (props: InlineMessageProps) => {
  const { appearance, className, description } = props;

  const baseProps = extractBaseProps(props);

  const InlineMessageClass = classNames(
    {
      ['InlineMessage']: true,
    },
    className
  );

  const IconClass = classNames({
    ['InlineMessage-icon']: true,
    ['InlineMessage-icon--warning']: appearance === 'warning',
  });

  const DescriptionClass = classNames({
    [`InlineMessage-text--${appearance}`]: appearance,
  });

  return (
    <div data-test="DesignSystem-InlineMessage" {...baseProps} className={InlineMessageClass}>
      {appearance !== 'default' && (
        <Icon
          data-test="DesignSystem-InlineMessage--Icon"
          name={IconMapping[appearance]}
          appearance={appearance}
          className={IconClass}
        />
      )}
      <div>
        <Text data-test="DesignSystem-InlineMessage--Description" className={DescriptionClass}>
          {description}
        </Text>
      </div>
    </div>
  );
};

InlineMessage.displayName = 'InlineMessage';
InlineMessage.defaultProps = {
  appearance: 'default',
  description: '',
};

export default InlineMessage;
