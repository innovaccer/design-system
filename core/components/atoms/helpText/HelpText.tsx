import * as React from 'react';
import { InlineMessage, Text } from '@/index';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface HelpTextProps extends BaseProps {
  /**
   * Text to be rendered
   */
  message?: string;
  /**
   * Shows error state in case of failed validation
   */
  error?: boolean;
}

export const HelpText = (props: HelpTextProps) => {
  const { error, message, className } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      'mt-3': true,
    },
    className
  );

  if (!message) return null;

  if (error) {
    return <InlineMessage size="small" className={classes} appearance="alert" description={message} />;
  }

  return (
    <div {...baseProps} className={classes}>
      <Text appearance="subtle" size="small" weight="medium">
        {message}
      </Text>
    </div>
  );
};

HelpText.displayName = 'HelpText';

export default HelpText;
