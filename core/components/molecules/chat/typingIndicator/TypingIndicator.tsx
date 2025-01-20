import * as React from 'react';
import { Text } from '@/index';
import { BaseProps } from '@/utils/types';

export interface TypingIndicatorProps extends BaseProps {
  text: string;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ text }) => {
  return (
    <Text appearance="subtle" weight="medium" role="status" aria-live="polite" aria-atomic="true">
      {text}
    </Text>
  );
};

export default TypingIndicator;
