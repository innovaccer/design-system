import * as React from 'react';
import { InlineMessage, Text } from '@/index';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import uidGenerator from '@/utils/uidGenerator';

export interface HelpTextProps extends BaseProps {
  /**
   * Optional DOM id for the help/error region; when omitted, a stable id is generated for this instance.
   * Pass the same id to form controls (e.g. Input, Select, etc.) via `aria-describedby` or `aria-errormessage` for accessibility.
   */
  id?: string;
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
  const { error, message, className, id: idProp } = props;
  const baseProps = extractBaseProps(props);

  const generatedIdRef = React.useRef<string | null>(null);
  if (generatedIdRef.current === null) {
    generatedIdRef.current = `HelpText-${uidGenerator()}`;
  }
  const resolvedId = idProp ?? generatedIdRef.current;

  const classes = classNames(
    {
      'mt-3': true,
    },
    className
  );

  if (!message) return null;

  if (error) {
    return <InlineMessage id={resolvedId} size="small" className={classes} appearance="alert" description={message} />;
  }

  return (
    <div id={resolvedId} {...baseProps} className={classes}>
      <Text appearance="subtle" size="small" weight="medium">
        {message}
      </Text>
    </div>
  );
};

HelpText.displayName = 'HelpText';

export default HelpText;
