import * as React from 'react';
import { Type, Name } from '../../chip/Chip';
import { action } from '@storybook/addon-actions';
import { ChipGroup } from '../ChipGroup';
export const all = () => {
  const type: Type[] = ['action', 'input', 'selection'];
  const list =
    [
      {
        label: 'Action', icon: 'assessment', disabled: false,
        type: type[0], name: 1
      },
      {
        label: 'Input', icon: 'assessment', clearbutton: true, disabled: false,
        type: type[1], name: '2'
      },
      {
        label: 'Selection', icon: 'assessment', clearbutton: true, disabled: false,
        type: type[2], selected: true, name: '3'
      },
      {
        label: 'Selection', icon: 'assessment', clearbutton: true, disabled: false,
        type: type[2], name: '4'
      }
    ];
  const onClickHandler = (name: Name) => {
    return action(`onClick: ${name}`)();
  };
  const onCloseHandler = (name: Name) => {
    return action(`onClose: ${name}`)();
  };

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
