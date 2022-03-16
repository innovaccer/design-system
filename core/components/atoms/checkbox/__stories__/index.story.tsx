import * as React from 'react';
import { action } from '@/utils/action';
import { updateKnob } from '@/utils/storybookEventEmitter';
import Checkbox from '../Checkbox';

// CSF format story
export const all = () => {
  const size = 'tiny';

  const label = 'Checkbox';

  const checked = false;

  const indeterminate = false;

  const disabled = false;

  const onChangeHandler = (event) => {
    updateKnob('checked', event.target.checked);
    updateKnob('indeterminate', event.target.indeterminate);
    return action(`onChange: ${event.target.checked}`)();
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
  title: 'Components/Checkbox/All',
  component: Checkbox,
};
