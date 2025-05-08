import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import styles from '@css/components/stepper.module.css';

export interface StepProps {
  label: string;
  value?: string | number;
  disabled: boolean;
  active: boolean;
  completed: boolean;
  onChange?: (label: string, value?: string | number) => void;
}

export const Step = (props: StepProps) => {
  const { label, value, disabled, active, completed, onChange } = props;

  const StepClass = classNames({
    [styles['Step']]: true,
    [styles['Stepper-animate']]: true,
    [styles['Step--active']]: active,
    [styles['Step--disabled']]: disabled,
    [styles['Step--completed']]: completed,
  });

  const IconClass = classNames({
    'mr-3 my-4': true,
    [styles['Stepper-animate']]: true,
  });

  const TextClass = classNames({
    [styles['Stepper-animate']]: true,
    [styles['Stepper-text']]: true,
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
        className={IconClass}
      />

      {label && (
        <Text weight="medium" color={textColor} className={TextClass}>
          {label}
        </Text>
      )}
    </div>
  );
};

Step.displayName = 'Step';

export default Step;
