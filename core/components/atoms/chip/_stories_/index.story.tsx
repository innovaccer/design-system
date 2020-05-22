import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Chip from '../Chip';
export const all = () => {

  const type = select(
    'type', ['Action', 'Selection', 'Input'],
    'Action'
  );
  const icon = text(
    'icon', ''
  );
  const label = text(
    'label',
    'Selection'
  );
  const clearbutton = boolean(
    'clearbutton', true
  );
  const disabled = boolean(
    'disabled',
    false
  );
  return (
    <div>
      <Chip
        icon={icon}
        label={label}
        clearbutton={clearbutton}
        disabled={disabled}
        type={type}
      // onClear={action('on-clear')}
      // onClick={action('on-click')}
      />
    </div>

  );
};
export default {
  title: 'Atoms|Chip',
  component: Chip
};
