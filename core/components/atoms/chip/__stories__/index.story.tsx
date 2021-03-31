import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Chip from '../Chip';
import { action } from '@storybook/addon-actions';

export const all = () => {

  const type = select(
    'type', ['action', 'selection', 'input'],
    'input'
  );

  const label = text(
    'label',
    'Chip Label',
  );

  const icon = text(
    'icon', 'assessment'
  );

  const disabled = boolean(
    'disabled',
    false
  );

  let clearButton;
  if (type !== 'action') {
    clearButton = boolean(
      'clearButton', true
    );
  }

  let selected;
  if (type === 'selection') {
    selected = boolean(
      'selected',
      false
    );
  }
  return (
    <Chip
      icon={icon}
      label={label}
      clearButton={clearButton}
      disabled={disabled}
      type={type}
      onClose={action(`onClose: ${name}`)}
      onClick={action(`onClick: ${name}`)}
      selected={selected}
      name={'chip'}
    />
  );
};
export default {
  title: 'Components/Chip/All',
  component: Chip
};
