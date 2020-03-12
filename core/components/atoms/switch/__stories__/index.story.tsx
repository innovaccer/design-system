import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import addons from '@storybook/addons';
import Switch from '../index';

const emitter = (type: any, options: any) => addons.getChannel().emit(type, options);

const updateKnob = (name: any, value: any) => (
  emitter('storybookjs/knobs/change', { name, value })
);

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

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Switch' };
