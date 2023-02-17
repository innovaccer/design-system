import * as React from 'react';
import { Combobox } from '@/index';

// CSF format story
export const all = () => {
  const optionList = [
    { label: 'Male', selected: true, value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  return (
    <div className="d-flex align-items-center w-50">
      <Combobox optionList={optionList} placeholder="Enter Value" multiSelect={true} />
    </div>
  );
};

export default {
  title: 'Components/Combobox/All',
  component: Combobox,
};
