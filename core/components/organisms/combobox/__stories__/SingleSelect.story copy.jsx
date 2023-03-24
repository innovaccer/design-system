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
      <Combobox
        renderItem={(inputValue, onClickHandler) => {
          return (
            <ul className="m-0 p-5 Combobox-list">
              {optionList.map((options, key) => {
                return (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li
                    key={key}
                    className="py-4 cursor-pointer"
                    onClick={() => onClickHandler(options.label)}
                    onKeyDown={() => onClickHandler(options.label)}
                  >
                    {options.label}
                  </li>
                );
              })}
            </ul>
          );
        }}
        // optionList={optionList}
        inputOptions={{ placeholder: 'Enter Name' }}
        multiSelect={false}
      />
    </div>
  );
};

export default {
  title: 'Components/Combobox/Single Select',
  component: Combobox,
};
