import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Chip, { Name } from '../Chip';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { action } from '@storybook/addon-actions';

export const all = () => {

  const type = select(
    'type', ['action', 'selection', 'input'],
    'action'
  );

  const icon = text(
    'icon', 'assessment'
  );
  const label = text(
    'label',
    'ChipLabel',
  );
  let clearbutton;
  if (type !== 'action') {
    clearbutton = boolean(
      'clearbutton', true
    );
  }

  const disabled = boolean(
    'disabled',
    false
  );
  let selected;
  if (type === 'selection') {
    selected = boolean(
      'selected',
      false
    );
    updateKnob('label', 'Selection');
  }
  if (type === 'action') {
    updateKnob('label', 'Action');
  }
  if (type === 'input') {
    updateKnob('label', 'Input');
  }
  const onCloseHandler = (name: Name) => {
    return action(`onClose: ${name}`)();
  };
  const onClickHandler = (name: Name) => {
    return action(`onClick: ${name}`)();
  };
  return (
    <div>
      <Chip
        icon={icon}
        label={label}
        clearbutton={clearbutton}
        disabled={disabled}
        type={type}
        onClose={onCloseHandler}
        onClick={onClickHandler}
        selected={selected}
        name={name}
      />
    </div>
  );
};
export default {
  title: 'Atoms|Chip',
  component: Chip
};
