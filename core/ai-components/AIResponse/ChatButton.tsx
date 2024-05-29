import * as React from 'react';
import classNames from 'classnames';
import { ButtonProps } from '@/index.type';
import { Button } from '@/index';

type ChatButtonType = Omit<ButtonProps, 'size' | 'largeIcon' | 'appearance'>;

export const ChatButton = (props: ChatButtonType) => {
  const { className, selected, ...rest } = props;

  const chatButtonClassNames = classNames(
    {
      'AIResponse-button': true,
      'AIResponse-button--selected': selected,
    },
    className
  );

  return (
    <Button
      data-test="DesignSystem-AIResponse-Button"
      {...rest}
      selected={selected}
      size="tiny"
      largeIcon={true}
      appearance="transparent"
      className={chatButtonClassNames}
    />
  );
};

export default ChatButton;
