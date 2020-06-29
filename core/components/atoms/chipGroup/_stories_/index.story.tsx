import * as React from 'react';
import { Type } from '../../chip/Chip';
import { action } from '@storybook/addon-actions';
import { ChipGroup } from '../ChipGroup';
export const all = () => {
  const type: Type[] = ['action', 'input', 'selection'];
  const list =
    [
      {
        label: 'Action', icon: 'assessment', disabled: false,
        type: type[0], name: '1'
      },
      {
        label: 'Input', icon: 'assessment', clearButton: true, disabled: false,
        type: type[1], name: '2'
      },
      {
        label: 'Selection', icon: 'assessment', clearButton: true, disabled: false,
        type: type[2], selected: true, name: '3'
      },
      {
        label: 'Selection', icon: 'assessment', clearButton: true, disabled: false,
        type: type[2], name: '4'
      }
    ];

  return (
    <div>
      <ChipGroup
        onClose={action(`onClose: ${name}`)}
        onClick={action(`onClick: ${name}`)}
        list={list}
      />
    </div>

  );
};
export default {
  title: 'Atoms|ChipGroup',
  component: ChipGroup
};
