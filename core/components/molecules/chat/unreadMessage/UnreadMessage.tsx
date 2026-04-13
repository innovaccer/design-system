import * as React from 'react';
import { Icon, Text } from '@/index';
import styles from '@css/components/chatSeparator.module.css';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';

export interface UnreadMessageProps extends BaseProps {
  /**
   * Text to be rendered inside `UnreadMessage`
   */
  text: string;
}

const UnreadMessage: React.FC<UnreadMessageProps> = (props) => {
  const { text, className, ...rest } = props;

  const wrapperClass = classNames('d-flex align-items-center justify-content-center my-4', className);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  return (
    <div
      data-test="DesignSystem-Chat-UnreadMessage"
      className={wrapperClass}
      role="button"
      tabIndex={0}
      aria-label={text}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      <span className={styles['Chat-UnreadMessage']}>
        <Icon appearance="white" name="arrow_Downward" className="mr-3" aria-hidden={true} />
        <Text appearance="white" weight="strong" data-test="DesignSystem-Chat-UnreadMessage-Text">
          {text}
        </Text>
      </span>
    </div>
  );
};

export default UnreadMessage;
