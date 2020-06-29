import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Chip from '../Chip';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { action } from '@storybook/addon-actions';

export const all = () => {

  const type = select(
    'type', ['action', 'selection', 'input'],
    'input'
  );

  const icon = text(
    'icon', 'assessment'
  );
  let clearButton;
  if (type !== 'action') {
    clearButton = boolean(
      'clearButton', true
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
  const label = text(
    'label',
    'Input',
  );
  return (
    <div>
      <Chip
        icon={icon}
        label={label}
        clearButton={clearButton}
        disabled={disabled}
        type={type}
        onClose={action(`onClose: ${name}`)}
        onClick={action(`onClick: ${name}`)}
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
