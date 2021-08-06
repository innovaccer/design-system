import * as React from 'react';
import { BaseProps, extractBaseProps } from '@/utils/types';
import Status, { StatusProps, StatusType } from './Status';
import Box, { BoxProps } from './Box';
import MessageText, { MessageTextProps } from './MessageText';

export type MessageType = 'incoming' | 'outgoing';

export interface SharedProps {
  type: MessageType;
  isTyping?: boolean;
  statusType?: StatusType;
}

export interface ChatMessageBaseProps extends BaseProps {
  /**
   * Type of `ChatMessage`
   *
   * MessageType = 'incoming' | 'outgoing';
   */
  type: MessageType;
  /**
   * Determines if user is typing
   */
  isTyping?: boolean;
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * StatusProps: {
   *   type: 'failed' | 'sending' | 'sent' | 'read' | 'urgent';;
   *   time?: string | number;
   *   readText?: string;
   *   failedText?: string;
   *   sendingText?: string;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | type | Type of message status | |
   * | time | Time at which message was sent/recieved | |
   * | readText | Message to be shown if chat message is read | Read |
   * | failedText | Message to be shown if chat message can't be delivered | Click to retry |
   * | sendingText | Message to be shown while sending chat message | Sending |
   */
  statusOptions?: StatusProps;
}

export type ChatMessageProps = ChatMessageBaseProps & BoxProps & MessageTextProps;

export const ChatMessage = (props: ChatMessageProps) => {
  const { type, text, isTyping, typingText, statusOptions, onClick, className } = props;

  const baseProps = extractBaseProps(props);

  const { type: statusType } = statusOptions || {};

  return (
    <Box
      {...baseProps}
      type={type}
      className={className}
      onClick={onClick}
      isTyping={isTyping}
      statusType={statusType}
      withStatus={statusOptions !== undefined}
    >
      <MessageText type={type} text={text} typingText={typingText} isTyping={isTyping} statusType={statusType} />
      {!isTyping && statusOptions && <Status {...statusOptions} />}
    </Box>
  );
};

ChatMessage.displayName = 'ChatMessage';
export default ChatMessage;
