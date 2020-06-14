import * as React from 'react';
import { Type } from '../../chip/Chip';
import { action } from '@storybook/addon-actions';
import { ChipGroup } from '../ChipGroup';
export const all = () => {
  const type: Type[] = ['action', 'input', 'selection'];
  const list = [{ label: 'Action', icon: 'assessment', disabled: false, type: type[0] },
  { label: 'Input', icon: 'assessment', clearbutton: true, disabled: false, type: type[1] },
  { label: 'Selection', icon: 'assessment', clearbutton: true, disabled: false, type: type[2], selected: true },
  { label: 'Selection', icon: 'assessment', clearbutton: true, disabled: false, type: type[2] }];
  const onCloseHandler = (name?: any) => {
    return action(`onClose: ${name}`)();
  };
  const onClickHandler = (name?: any) => {
    return action(`onClick: ${name}`)();
  };

  if (!open) return null;

  return (
    <div>
      <ChipGroup
        onClose={onCloseHandler}
        onClick={onClickHandler}
        list={list}
      />
    </div>

  );
};
export default {
  title: 'Atoms|ChipGroup',
  component: ChipGroup
};
