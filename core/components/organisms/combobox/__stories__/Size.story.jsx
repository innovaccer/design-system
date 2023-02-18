import * as React from 'react';
import { Combobox, Label } from '@/index';

// CSF format story
export const size = () => {
  const inputSizes = ['small', 'regular', 'large'];
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
    <div className="d-flex justify-content-between">
      {inputSizes.map((size, key) => {
        return (
          <div className="w-25" key={key}>
            <Label>Medicine name</Label>
            <Combobox
              optionList={optionList}
              inputOptions={{ placeholder: 'Enter Name', size: size }}
              multiSelect={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Combobox/Size',
  component: Combobox,
};
