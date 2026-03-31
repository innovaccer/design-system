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
  /**
   * HTML id attribute for the help text element, used for aria-describedby associations
   */
  id?: string;
}

export const HelpText = (props: HelpTextProps) => {
  const { error, message, className, id } = props;
  const baseProps = extractBaseProps(props);

  const classes = classNames(
    {
      'mt-3': true,
    },
    className
  );

  if (!message) return null;

  if (error) {
    const inlineMessage = <InlineMessage size="small" className={classes} appearance="alert" description={message} />;
    return id ? <div id={id}>{inlineMessage}</div> : inlineMessage;
  }

  return (
    <div id={id} {...baseProps} className={classes}>
      <Text appearance="subtle" size="small" weight="medium">
        {message}
      </Text>
    </div>
  );
};

HelpText.displayName = 'HelpText';

export default HelpText;
