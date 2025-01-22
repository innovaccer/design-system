import * as React from 'react';
import { Text } from '@/index';
import styles from '@css/components/chatSeparator.module.css';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';

export interface NewMessageProps extends BaseProps {
  /**
   * Text to be rendered inside `NewMessage`
   */
  text: string;
}

const NewMessage: React.FC<NewMessageProps> = (props) => {
  const { text, className, ...rest } = props;
  const classes = classNames('py-6 d-flex justify-content-center align-items-center', className);

  return (
    <div
      data-test="DesignSystem-Chat-NewMessage"
      className={classes}
      role="button"
      aria-label={text}
      aria-live="polite"
      {...rest}
    >
      <span className={styles['NewMessage-Divider--left']} />
      <Text appearance="link" weight="strong" size="small">
        {text}
      </Text>
      <span className={styles['NewMessage-Divider--right']} />
    </div>
  );
};

export default NewMessage;
