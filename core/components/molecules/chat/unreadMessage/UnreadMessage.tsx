import * as React from 'react';
import { Icon, Text } from '@/index';
import styles from '@css/components/chatSeparator.module.css';
import { BaseProps } from '@/utils/types';

export interface UnreadMessageProps extends BaseProps {
  text: string;
}

const UnreadMessage: React.FC<UnreadMessageProps> = ({ text }) => {
  return (
    <div className="d-flex align-items-center justify-content-center my-4">
      <span className={styles['Chat-UnreadMessage']} role="button" aria-label={text}>
        <Icon appearance="white" name="arrow_Downward" className="mr-3" />
        <Text appearance="white" weight="strong">
          {text}
        </Text>
      </span>
    </div>
  );
};

export default UnreadMessage;
