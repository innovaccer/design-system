import * as React from 'react';
import { BaseProps } from '@/utils/types';
import classNames from 'classnames';
import { Button } from '@/index';

export interface ChatInputProps extends BaseProps {
  /**
   * Specifies the date to be displayed
   */
  actions?: any;
  /**
   *
   */
  enableMention?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = (props) => {
  const { className, ...rest } = props;

  const containerClass = classNames(
    {
      ['bg-primary p-10 border']: true,
    },
    className
  );

  return (
    <div className={containerClass} data-test="DesignSystem-Chat-ChatInput" {...rest} contentEditable={true}>
      <Button>Send Msg</Button>
    </div>
  );
};

export default ChatInput;
