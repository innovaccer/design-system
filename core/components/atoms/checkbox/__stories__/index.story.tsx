import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import { action } from '@storybook/addon-actions';
import Checkbox from '../index';

const emitter = (type: any, options: any) => addons.getChannel().emit(type, options);

const updateKnob = (name: any, value: any) => (
  emitter('storybookjs/knobs/change', { name, value })
);

// CSF format story
export const checkbox = () => {

  const size = select(
    'size',
    ['tiny', 'regular'],
    undefined
  );

  const label = text(
    'label',
    'Checkbox'
  );

  const checked = boolean(
    'checked',
    false
  );

  const indeterminate = boolean(
    'indeterminate',
    false
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const onChangeHandler = (checkedValue: boolean) => {
    updateKnob('checked', checkedValue);
    updateKnob('indeterminate', false);
    return action(`onChange: ${checkedValue}`)();
  };

  return (
    <Checkbox
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
      size={size}
      label={label}
      onChange={onChangeHandler}
    />
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Checkbox' };
