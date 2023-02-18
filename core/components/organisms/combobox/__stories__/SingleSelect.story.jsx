import * as React from 'react';
import { Combobox, Label } from '@/index';

// CSF format story
export const singleSelect = () => {
  const optionList = [
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
    { label: 'Vancomycin', value: 'Vancomycin' },
    { label: 'Acetaminophen', value: 'Acetaminophen' },
    { label: 'Ibuprofen', value: 'Ibuprofen' },
    { label: 'Penicillin G', value: 'Penicillin G' },
    { label: 'Penbutolol', value: 'Penbutolol' },
    { label: 'Aminophenol', value: 'Aminophenol' },
  ];

  return (
    <div className="w-25">
      <Label>Medicine name</Label>
      <Combobox optionList={optionList} inputOptions={{ placeholder: 'Enter Name' }} multiSelect={false} />
    </div>
  );
};

export default {
  title: 'Components/Combobox/Single Select',
  component: Combobox,
};
