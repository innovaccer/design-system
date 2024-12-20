import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { MessageAppearance } from '@/common.type';
import buttonStyles from '@css/components/button.module.css';
import toastStyles from '@css/components/toast.module.css';

export interface Props {
  appearance: MessageAppearance;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ActionButton = (props: Props) => {
  const { appearance, label, onClick } = props;

  const buttonClass = classNames({
    [buttonStyles['Button']]: true,
    [buttonStyles['Button--tiny']]: true,
    [toastStyles['Toast-actionButton']]: true,
    [toastStyles[`Toast-actionButton--${appearance}`]]: appearance,
  });

  const onClickHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick(e);
  };

  return (
    <button className={buttonClass} onClick={onClickHandler}>
      <Text appearance="white">{label}</Text>
    </button>
  );
};

ActionButton.displayName = 'ActionButton';
ActionButton.defaultProps = {
  appearance: 'default',
};

export default ActionButton;
