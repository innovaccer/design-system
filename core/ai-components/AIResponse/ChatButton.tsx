import * as React from 'react';
import { ButtonProps } from '@/index.type';
import { Button } from '@/index';

type ChatButtonType = Omit<ButtonProps, 'size' | 'largeIcon' | 'appearance'>;

export const ChatButton = (props: ChatButtonType) => {
  const { className, selected, ...rest } = props;

  return (
    <Button
      data-test="DesignSystem-AIResponse-Button"
      {...rest}
      selected={selected}
      size="tiny"
      largeIcon={true}
      appearance="transparent"
      className={className}
    />
  );
};

export default ChatButton;
