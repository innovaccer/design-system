import * as React from 'react';
import { Combobox, Label } from '@/index';

// CSF format story
export const multiSelect = () => {
  const optionList = [
    { label: 'Anyone', value: 'Anyone' },
    { label: 'Person with disability', value: 'Person with disability' },
    { label: 'Retired person from armed forces', value: 'Retired person from armed forces' },
    { label: 'Adults', value: 'Adults' },
    { label: 'Childrens', value: 'Childrens' },
    { label: 'Doctors', value: 'Doctors' },
  ];

  return (
    <div className="w-25">
      <Label>Population focus</Label>
      <Combobox
        optionList={optionList}
        chipInputOptions={{ placeholder: 'Enter population focus' }}
        multiSelect={true}
      />
    </div>
  );
};

export default {
  title: 'Components/Combobox/Multi Select',
  component: Combobox,
};
