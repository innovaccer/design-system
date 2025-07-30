import * as React from 'react';
import { Text } from '@/index';
import { BaseProps } from '@/utils/types';

export type TypingIndicatorProps = {
  /**
   * Text to be rendered in `TypingIndicator`
   */
  text: string;
} & BaseProps;

export const TypingIndicator: React.FC<TypingIndicatorProps> = (props) => {
  const { text, ...rest } = props;
  return (
    <Text
      data-test="DesignSystem-Chat-TypingIndicator"
      appearance="subtle"
      weight="medium"
      size="small"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      {...rest}
    >
      {text}
    </Text>
  );
};

export default TypingIndicator;
