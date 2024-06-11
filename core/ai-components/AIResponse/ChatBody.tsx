import * as React from 'react';
import classNames from 'classnames';
import { TBaseHtmlProps } from '../common.type';

export interface ChatBodyProps extends TBaseHtmlProps<HTMLDivElement> {
  /**
   * Pass children to `AI Response Body`
   */
  children: React.ReactNode;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `AI Response Body`
   */
  className?: string;
}

export const ChatBody = (props: ChatBodyProps) => {
  const { children, className, ...rest } = props;

  const chatBodyClassNames = classNames(
    {
      'pb-3': true,
    },
    className
  );

  return (
    <div className={chatBodyClassNames} data-test="DesignSystem-AIResponse-Body" {...rest}>
      {children}
    </div>
  );
};

export default ChatBody;
