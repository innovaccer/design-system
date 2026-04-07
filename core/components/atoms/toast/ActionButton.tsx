import * as React from 'react';
import classNames from 'classnames';
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
    <button type="button" className={buttonClass} onClick={onClickHandler}>
      <span className={toastStyles['Toast-actionButton-label']} data-test="DesignSystem-Toast-ActionButton-Label">
        {label}
      </span>
    </button>
  );
};

ActionButton.displayName = 'ActionButton';
ActionButton.defaultProps = {
  appearance: 'default',
};

export default ActionButton;
