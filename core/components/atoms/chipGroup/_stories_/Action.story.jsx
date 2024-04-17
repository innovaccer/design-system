import * as React from 'react';
import { action } from '@/utils/action';
import { ChipGroup } from '@/index';

export const actionChips = () => {
  const list = [
    {
      label: 'Letter.pdf',
      icon: 'assessment',
      type: 'action',
      name: '1',
    },
    {
      label: 'Mail.pdf',
      icon: 'assessment',
      clearButton: true,
      type: 'action',
      name: '2',
    },
    {
      label: 'Draft.pdf',
      icon: 'assessment',
      clearButton: true,
      type: 'action',
      selected: true,
      name: '3',
    },
  ];

  return <ChipGroup list={list} onClick={action(`onClick event`)} />;
};
export default {
  title: 'Components/Chip/ChipGroup/Action Chips',
  component: ChipGroup,
};
