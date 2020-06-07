import * as React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';
import Chip from '../Chip';
export type Type = 'Action' | 'Selection' | 'Input';
import { action } from '@storybook/addon-actions';

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
  const selected = boolean(
    'selected',
    false
  );
  const onCloseHandler = (name: any) => {
    return action(`onClose: ${name}`)();
  };
  const onClickHandler = (name: any) => {
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
        name={name}
        onClose={onCloseHandler}
        onClick={onClickHandler}
        selected={selected}
      />
    </div>

  );
};
export default {
  title: 'Atoms|Chip',
  component: Chip
};
