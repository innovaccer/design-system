import * as React from 'react';
import { Combobox, Label } from '@/index';

// CSF format story
export const all = () => {
  const optionList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
    { label: '-', value: '-' },
    { label: '-', value: '-' },
    { label: '-', value: '-' },
    { label: '-', value: '-' },
  ];

  return (
    <div className="w-25">
      <Label>Medicine name</Label>
      <Combobox optionList={optionList} inputOptions={{ placeholder: 'Enter Name' }} />
    </div>
  );
};

export default {
  title: 'Components/Combobox/All',
  component: Combobox,
};
