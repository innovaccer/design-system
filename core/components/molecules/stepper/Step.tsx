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
    ['Step--active']: active,
    ['Step--disabled']: disabled,
    ['Stepper-animate']: true,
  });

  const onClickHandle = () => {
    if (disabled) return;
    if (onChange) onChange(label, value);
  };

  const iconAppearance = completed ? 'info' : disabled ? 'disabled' : active ? 'info' : 'default';

  const appearance = active ? 'link' : disabled ? 'disabled' : 'default';

  return (
    // TODO(a11y)
    // eslint-disable-next-line
    <div data-test="DesignSystem-Step" className={StepClass} onClick={onClickHandle}>
      <Icon
        data-test="DesignSystem-Step--Icon"
        name={completed ? 'check_circle' : 'radio_button_unchecked'}
        appearance={iconAppearance}
        className="mr-3 my-4"
      />

      {label && (
        <Text weight="medium" appearance={appearance}>
          {label}
        </Text>
      )}
    </div>
  );
};

Step.displayName = 'Step';

export default Step;
