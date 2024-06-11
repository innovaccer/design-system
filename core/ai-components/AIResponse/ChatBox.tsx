import * as React from 'react';
import classNames from 'classnames';
import { TBaseHtmlProps } from '../common.type';

export interface ChatBoxProps extends TBaseHtmlProps<HTMLDivElement> {
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

export const ChatBox = (props: ChatBoxProps) => {
  const { children, className, ...rest } = props;

  const chatBoxClassNames = classNames(
    {
      'AIResponse-box': true,
    },
    className
  );

  return (
    <div className={chatBoxClassNames} data-test="DesignSystem-AIResponse-Box" {...rest}>
      {children}
    </div>
  );
};

export default ChatBox;
