import * as React from 'react';
import ChatBox from './ChatBox';
import ChatButton from './ChatButton';
import ChatActionBar from './ChatActionBar';
import ChatBody from './ChatBody';
import classNames from 'classnames';
import { TBaseHtmlProps } from '../common.type';
import { Sara } from '@/index';
import styles from '@css/ai-components/chat.module.css';

export interface AIResponseProps extends TBaseHtmlProps<HTMLDivElement> {
  /**
   * Pass children to `AI Response`
   */
  children: React.ReactNode;
  /**
   * Set as `true` to show avatar with `AI Response`
   */
  showAvatar?: boolean;
  /**
   * Pass metadata to `AI Response`
   */
  metaData?: () => React.ReactNode;
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

const AIResponseBubble = (props: AIResponseProps) => {
  const { children, showAvatar, className, ...rest } = props;

  const chatContainerClassNames = classNames(
    {
      ['ml-4']: showAvatar,
    },
    className
  );

  if (showAvatar) {
    return (
      <div className="d-flex">
        <Sara data-test="DesignSystem-AIResponse-Avatar" />
        <ChatBox {...rest} className={chatContainerClassNames}>
          {children}
        </ChatBox>
      </div>
    );
  }

  return <ChatBox {...props}>{children}</ChatBox>;
};

export const AIResponse = (props: AIResponseProps) => {
  const { metaData, showAvatar } = props;

  const metaDataClassName = classNames({
    [styles['AIResponse-metaData']]: showAvatar,
    ['mb-2']: true,
  });

  const memoizedMetaData = React.useMemo(() => metaData?.(), [metaData]);

  if (metaData) {
    return (
      <div className="d-flex flex-column">
        <div data-test="DesignSystem-AIResponse-Metadata" className={metaDataClassName}>
          {memoizedMetaData}
        </div>
        <AIResponseBubble {...props} />
      </div>
    );
  }

  return <AIResponseBubble {...props} />;
};

AIResponse.Button = ChatButton;
AIResponse.ActionBar = ChatActionBar;
AIResponse.Body = ChatBody;

export default AIResponse;
