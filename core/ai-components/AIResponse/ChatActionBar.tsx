import * as React from 'react';
import classNames from 'classnames';
import { TBaseHtmlProps } from '../common.type';
import styles from '@css/ai-components/chat.module.css';

export interface ChatActionBarProps extends TBaseHtmlProps<HTMLDivElement> {
  /**
   * Pass children to `AI Response Action Bar`
   */
  children: React.ReactNode;
  /**
   * Stores custom testing data private to the component.
   */
  'data-test'?: string;
  /**
   * Adds className to `AI Response Action Bar`
   */
  className?: string;
}

export const ChatActionBar = (props: ChatActionBarProps) => {
  const { children, className, ...rest } = props;

  const actionBarClassNames = classNames(
    {
      [styles['AIResponse-actionBar']]: true,
    },
    className
  );

  return (
    <div className={actionBarClassNames} data-test="DesignSystem-AIResponse-ActionBar" {...rest}>
      {children}
    </div>
  );
};

export default ChatActionBar;
