import * as React from 'react';
import { Icon, Text } from '@/index';
import styles from '@css/components/chatSeparator.module.css';
import { BaseProps } from '@/utils/types';
import isSpaceKey from '@/accessibility/utils/isSpaceKey';
import classNames from 'classnames';

export interface UnreadMessageProps extends BaseProps {
  /**
   * Text to be rendered inside `UnreadMessage`
   */
  text: string;
  /**
   * Callback when the element is clicked
   */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * Callback when a key is pressed
   */
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  /**
   * Callback when a key is released
   */
  onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
}

const UnreadMessage: React.FC<UnreadMessageProps> = (props) => {
  const { text, className, ...rest } = props;

  const wrapperClass = classNames('d-flex align-items-center justify-content-center my-4', className);

  const spacePressed = React.useRef(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isSpaceKey(e)) {
      e.preventDefault();
      if (!e.repeat) {
        spacePressed.current = true;
      }
    }
    if (e.key === 'Enter' && !e.repeat) {
      e.currentTarget.click();
    }
    rest.onKeyDown?.(e);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isSpaceKey(e)) {
      e.preventDefault();
      if (spacePressed.current) {
        spacePressed.current = false;
        e.currentTarget.click();
      }
    }
    rest.onKeyUp?.(e);
  };

  return (
    <div
      data-test="DesignSystem-Chat-UnreadMessage"
      className={wrapperClass}
      role="button"
      tabIndex={0}
      aria-label={text}
      {...rest}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
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
