import * as React from 'react';
import classNames from 'classnames';
import { TBaseHtmlProps } from '../common.type';
import styles from '@css/ai-components/chat.module.css';

export interface ChatBoxProps extends TBaseHtmlProps<HTMLDivElement> {
  /**
   * Pass children to `AI Response`
   */
  children: React.ReactNode;
  /**
   * Set as `true` to show glow effect with `AI Response`
   */
  showGlow?: boolean;
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
  const { children, className, showGlow, ...rest } = props;

  const chatContainerClassNames = classNames(
    {
      [styles['AIResponse-container']]: !showGlow,
      [styles['AIResponse-container--glow']]: showGlow,
    },
    className
  );

  const chatBoxClassNames = classNames({
    [styles['AIResponse-box--glow']]: showGlow,
    [styles['AIResponse-box']]: !showGlow,
  });

  return (
    <div className={chatContainerClassNames} data-test="DesignSystem-AIResponse-Container" {...rest}>
      <div className={chatBoxClassNames} data-test="DesignSystem-AIResponse-Box">
        {children}
      </div>
    </div>
  );
};

ChatBox.defaultProps = {
  showGlow: true,
};

export default ChatBox;
