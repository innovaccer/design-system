import * as React from 'react';
import { action } from '@/utils/action';
import { ChipGroup } from '@/index';

export const selectionChips = () => {
  const list = [
    {
      label: 'Call note',
      icon: 'assessment',
      clearButton: true,
      type: 'selection',
      name: '1',
    },
    {
      label: 'Visit note',
      icon: 'assessment',
      clearButton: true,
      type: 'selection',
      name: '2',
    },
    {
      label: 'Generic note',
      icon: 'assessment',
      clearButton: true,
      type: 'selection',
      name: '3',
    },
  ];

  return <ChipGroup list={list} onClose={action(`onClose event`)} onClick={action(`onClick event`)} />;
};
export default {
  title: 'Components/Chip/ChipGroup/Selection Chips',
  component: ChipGroup,
};
