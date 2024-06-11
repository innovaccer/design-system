import * as React from 'react';
import ChatBox from './ChatBox';
import ChatButton from './ChatButton';
import ChatActionBar from './ChatActionBar';
import ChatBody from './ChatBody';
import { TBaseHtmlProps } from '../common.type';

export interface AIResponseProps extends TBaseHtmlProps<HTMLDivElement> {
  /**
   * Pass children to `AI Response`
   */
  children: React.ReactNode;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `AI Response`
   */
  className?: string;
}

export const AIResponse = (props: AIResponseProps) => {
  const { children } = props;
  return <ChatBox {...props}>{children}</ChatBox>;
};

AIResponse.Button = ChatButton;
AIResponse.ActionBar = ChatActionBar;
AIResponse.Body = ChatBody;

export default AIResponse;
