import * as React from 'react';
import classNames from 'classnames';
import Text from '@/components/atoms/text';
import { Appearance } from './Toast';

export interface IProps {
  /**
   * @default "default"
   */
  appearance?: Appearance;
  label: string;
  onClick?: (e: React.MouseEvent) => void;
}

const ActionButton: React.FunctionComponent<IProps> = props => {
  const {
    appearance = 'default',
    label,
    onClick
  } = props;

  const buttonClass = classNames({
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

export default ActionButton;
