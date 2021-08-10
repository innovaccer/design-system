import * as React from 'react';
import { Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { SharedProps } from './ChatMessage';

export interface MessageTextProps extends BaseProps {
  /**
   * Text Message
   */
  text: string;
  /**
   * Message to be shown while user is typing
   */
  typingText: string;
}

export type InternalTextProps = MessageTextProps & SharedProps;

export const MessageText = (props: InternalTextProps) => {
  const { text, type, isTyping, typingText, statusType, className } = props;

  const baseProps = extractBaseProps(props);

  if (isTyping && type === 'incoming') {
    return (
      <Text {...baseProps} appearance={'subtle'} size={'small'} className={className}>
        {typingText}
      </Text>
    );
  }

  return (
    <Text {...baseProps} className={className} appearance={statusType === 'sending' ? 'subtle' : 'default'}>
      {text}
    </Text>
  );
};

MessageText.defaultProps = {
  text: '',
  typingText: 'Typing..',
};

MessageText.displayName = 'MessageText';
export default MessageText;
