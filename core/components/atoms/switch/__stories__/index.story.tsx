import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import Switch from '../index';

// CSF format story
export const all = () => {

  const size = select(
    'size',
    ['tiny', 'regular', 'large'],
    undefined
  );

  const appearance = select(
    'appearance',
    ['primary', 'alert', 'success', 'warning'],
    undefined
  );

  const checked = boolean(
    'checked',
    false
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const onChangeHandler = (checkedValue: boolean) => {
    updateKnob('checked', checkedValue);
    return action(`switch-change: ${checkedValue}`)();
  };

  return (
    <div>
      <Switch
        disabled={disabled}
        appearance={appearance}
        checked={checked}
        size={size}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default {
  title: 'Atoms|Switch',
  component: Switch
};
