// TextFieldCommon.tsx
import React from 'react';
import { HelpText, Text } from '@/index';

interface RenderHelpTextProps {
  helpText: string;
  error?: boolean;
}

export const RenderHelpText: React.FC<RenderHelpTextProps> = ({ helpText, error }) => (
  <HelpText
    className="d-flex"
    message={helpText.trim().length > 0 ? helpText : ' '}
    error={error ? error : undefined}
  />
);

interface RenderCounterProps {
  inputText: string;
  max: number;
}

export const RenderCounter: React.FC<RenderCounterProps> = ({ inputText, max }) => (
  <div className="mt-3 d-flex">
    <Text
      appearance="subtle"
      className="pr-2"
      color={inputText.length > max ? 'alert' : undefined}
      size="small"
      weight="medium"
    >
      {inputText.length}
    </Text>
    <Text appearance="subtle" className="pr-2" size="small" weight="medium">
      /
    </Text>
    <Text appearance="subtle" size="small" weight="medium">
      {max}
    </Text>
  </div>
);
