import * as React from 'react';
import classNames from 'classnames';
import { Icon, Text } from '@/index';
import { isSpaceKey } from '@/accessibility/utils';
import styles from '@css/components/stepper.module.css';

export interface StepProps {
  label: string;
  value?: React.ReactText;
  disabled: boolean;
  active: boolean;
  completed: boolean;
  onChange?: (label: string, value?: React.ReactText) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  isTabStop?: boolean;
  stepIndex: number;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>((props, ref) => {
  const { label, value, disabled, active, completed, onChange, onKeyDown, isTabStop = false, stepIndex } = props;

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
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) {
      onKeyDown?.(event);
      return;
    }
    if (event.key === 'Enter' || isSpaceKey(event)) {
      event.preventDefault();
      // Prevent auto-repeat: only process first keydown
      if (event.repeat) return;
      onClickHandle();
    }
  };

  const textColor = active ? 'primary-dark' : disabled ? 'inverse-lightest' : 'inverse';

  const stepLabel = label || `Step ${stepIndex + 1}`;
  const stateDescription = active ? ', current' : completed ? ', completed' : '';
  const ariaLabel = `Step ${stepIndex + 1}: ${stepLabel}${stateDescription}`;

  return (
    <div
      ref={ref}
      data-test="DesignSystem-Step"
      className={StepClass}
      onKeyDown={(e) => onKeyDownHandler(e)}
      onClick={onClickHandle}
      tabIndex={disabled ? -1 : isTabStop ? 0 : -1}
      role="button"
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
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
});

Step.displayName = 'Step';

export default Step;
