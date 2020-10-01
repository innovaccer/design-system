import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { Appearance } from './Toast';

export interface Props {
  appearance: Appearance;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ActionButton = (props: Props) => {
  const {
    appearance,
    label,
    onClick
  } = props;

  const buttonClass = classNames({
    ['Button']: true,
    ['Button--tiny']: true,
    ['Toast-actionButton']: true,
    [`Toast-actionButton--${appearance}`]: appearance
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
  appearance: 'default'
};

export default ActionButton;
