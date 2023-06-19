import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';

export interface StepProps {
  label: string;
  value?: React.ReactText;
  disabled: boolean;
  active: boolean;
  completed: boolean;
  onChange?: (label: string, value?: React.ReactText) => void;
}

export const Step = (props: StepProps) => {
  const { label, value, disabled, active, completed, onChange } = props;

  const StepClass = classNames({
    ['Step']: true,
    ['Stepper-animate']: true,
    ['Step--active']: active,
    ['Step--disabled']: disabled,
    ['Step--completed']: completed,
  });

  const onClickHandle = () => {
    if (disabled) return;
    if (onChange) onChange(label, value);
  };

  const onKeyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClickHandle();
    }
  };

  const textColor = active ? 'primary-dark' : disabled ? 'inverse-lightest' : 'inverse';

  return (
    // TODO(a11y)
    // eslint-disable-next-line
    <div
      data-test="DesignSystem-Step"
      className={StepClass}
      onKeyDown={(e) => onKeyDownHandler(e)}
      onClick={onClickHandle}
      tabIndex={disabled ? -1 : 0}
    >
      <Icon
        data-test="DesignSystem-Step--Icon"
        name={completed ? 'check_circle' : 'radio_button_unchecked'}
        className="mr-3 my-4 Stepper-animate"
      />

      {label && (
        <Text weight="medium" color={textColor} className="Stepper-animate Stepper-text">
          {label}
        </Text>
      )}
    </div>
  );
};

Step.displayName = 'Step';

export default Step;
