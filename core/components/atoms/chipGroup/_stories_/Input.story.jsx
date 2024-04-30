import * as React from 'react';
import { action } from '@/utils/action';
import { ChipGroup } from '@/index';

export const inputChips = () => {
  const list = [
    {
      label: 'John',
      clearButton: true,
      type: 'input',
      name: '1',
    },
    {
      label: 'Locke',
      clearButton: true,
      type: 'input',
      name: '2',
    },
    {
      label: 'Nina',
      clearButton: true,
      type: 'input',
      name: '3',
    },
  ];

  return <ChipGroup list={list} onClose={action(`onClose event`)} onClick={action(`onClick event`)} />;
};
export default {
  title: 'Components/Chip/ChipGroup/Input Chips',
  component: ChipGroup,
};
