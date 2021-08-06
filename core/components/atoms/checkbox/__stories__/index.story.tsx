import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import Checkbox from '../Checkbox';

// CSF format story
export const all = () => {
  const size = select('size', ['regular', 'tiny'], undefined);

  const label = text('label', 'Checkbox');

  const checked = boolean('checked', false);

  const indeterminate = boolean('indeterminate', false);

  const disabled = boolean('disabled', false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
