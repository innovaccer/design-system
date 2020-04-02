import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import Checkbox from '../Checkbox';

// CSF format story
export const all = () => {
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

export default {
  title: 'Atoms|Checkbox',
  component: Checkbox
};
