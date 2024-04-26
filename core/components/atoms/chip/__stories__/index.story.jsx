import * as React from 'react';
import { Chip } from '@/index';
import { action } from '@/utils/action';

export const all = () => {
  const type = 'selection';

  const label = 'Chip Label';

  const icon = 'assessment';

  const disabled = false;

  let clearButton;
  if (type !== 'action') {
    clearButton = true;
  }

  let selected;
  if (type === 'selection') {
    selected = false;
  }
  return (
    <Chip
      icon={icon}
      label={label}
      clearButton={clearButton}
      disabled={disabled}
      type={type}
      onClose={action(`onClose: ${label}`)}
      onClick={action(`onClick: ${label}`)}
      selected={selected}
      name={'chip'}
    />
  );
};
export default {
  title: 'Components/Chip/Chip/All',
  component: Chip,
};
