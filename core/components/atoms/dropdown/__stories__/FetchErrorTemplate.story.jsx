import * as React from 'react';
import { Uncontrolled, Controlled } from './_common_/types';
import { action } from '@/utils/action';
import Dropdown from '../Dropdown';
import { dropdownOptions } from './Options';

// CSF format story
export const fetchErrorTemplate = () => {
  const triggerSize = 'tiny';

  const align = 'left';

  const optionType = 'ICON_WITH_META';

  const error = false;

  const disabled = false;

  const menu = false;

  const withSearch = false;

  const withCheckbox = false;

  const showApplyButton = false;

  const closeOnSelect = true;

  const icon = '';

  const placeholder = 'Select';

  const selectAllLabel = 'Select All';

  const inlineLabel = '';

  const labelLimit = 2;

  const maxHeight = 200;

  const loadersCount = 10;

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise((resolve) => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const customLabel = (selectedLength, totalOptions) => {
    const optionsLength = totalOptions ? totalOptions : dropdownOptions.length;
    return `${selectedLength} of ${optionsLength} are selected`;
  };

  const onChangeHandler = (selectedValues) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const onClose = (selectedValues) => {
    return action(`dropdown closed with selected values: ${selectedValues}`)();
  };

  const props = {
    triggerSize,
    align,
    icon,
    error,
    placeholder,
    inlineLabel,
    disabled,
    menu,
    closeOnSelect,
    withSearch,
    withCheckbox,
    showApplyButton,
    maxHeight,
    loadersCount,
    onClose,
    fetchOptions,
    optionType,
    selectAllLabel,
    triggerOptions: { customLabel, labelLimit },
    options: dropdownOptions,
    onChange: onChangeHandler,
  };

  const key = `checkbox${withCheckbox} applyButton:${showApplyButton} search:${withSearch}`;

  return (
    <div key={key} className="w-25">
      <Dropdown {...props} />
    </div>
  );
};

const customCode = `() => {
  const dropdownOptions =  [];
  for (let i = 1; i <= 100; i++) {
    dropdownOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      icon: 'event',
      subInfo: 'subInfo',
    });
  }

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
      return new Promise((resolve, reject) => reject(''));
  };

  return (
    <div className='w-25 pb-14'>
      <Dropdown
        fetchOptions={fetchOptions}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Fetch Error Template',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
