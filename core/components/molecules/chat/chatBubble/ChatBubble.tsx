import * as React from 'react';
import { IncomingBubble, IncomingOptionProps } from './IncomingBubble';
import { OutgoingBubble, OutgoingOptionProps } from './OutgoingBubble';
import { BaseProps } from '@/utils/types';

export type ChatBubbleType = 'incoming' | 'outgoing';

export interface ChatBubbleProps extends BaseProps {
  /**
   * Type of ChatBubble
   */
  type: ChatBubbleType;
  /**
   * Props for Incoming Chat Bubble Type
   *
   * **`incomingOptions` are only applicable when `type` is `incoming`
   *
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * IncomingOptionProps: {
   *   children?: React.ReactNode;
   *   time?: string | React.ReactText;
   *   metaData?: string;
   *   actionBar?: () => JSX.Element;
   *   urgentMessage?: () => JSX.Element;
   *   avatarData?: ChatAvatarProps;
   *   showAvatar?: boolean;
   * }
   *
   * ChatAvatarProps: {
   *  appearance?: AvatarAppearance;
   *  firstName?: string;
   *  lastName?: string;
   *  role?: string;
   *  tabIndex?: number;
   *  icon?: React.ReactNode;
   *  image?: React.ReactNode;
   * }
   * </pre>
   */
  incomingOptions?: IncomingOptionProps;
  /**
   * Props for Outgoing Chat Bubble Type
   * **`outgoingOptions` are only applicable when `type` is `outgoing`
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * OutgoingOptionProps: {
   *  metaData?: string;
   *  status?: boolean;
   *  failed?: boolean;
   *  children?: React.ReactNode;
   *  time?: string | React.ReactText;
   *  actionBar?: () => JSX.Element;
   *  urgentMessage?: () => JSX.Element;
   *  failedMessage?: () => JSX.Element;
   * }
   * </pre>
   */
  outgoingOptions?: OutgoingOptionProps;
  /**
   * Elements to be rendered inside ChatBubble
   */
  children?: React.ReactNode;
}

export const ChatBubble = (props: ChatBubbleProps) => {
  const { type, incomingOptions, outgoingOptions, children, ...rest } = props;

  if (type === 'incoming') {
    return (
      <IncomingBubble {...incomingOptions} {...rest}>
        {children}
      </IncomingBubble>
    );
  }

  return (
    <OutgoingBubble {...outgoingOptions} {...rest}>
      {children}
    </OutgoingBubble>
  );
};

ChatBubble.displayName = 'ChatBubble';
export default ChatBubble;
