import * as React from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { Uncontrolled, Controlled } from './_common_/types';
import { action } from '@storybook/addon-actions';
import Dropdown from '../Dropdown';
import { dropdownOptions } from './Options';

// CSF format story
export const all = () => {
  const triggerSize = select(
    'trigger size',
    ['regular', 'tiny'],
    undefined
  );

  const align = select(
    'align',
    ['right', 'left'],
    undefined
  );

  const optionType = select(
    'option type',
    ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'],
    undefined,
  );

  const error = boolean('error', false);

  const disabled = boolean('disabled', false);

  const menu = boolean('menu', false);

  const withSearch = boolean('withSearch', false);

  const withCheckbox = boolean('withCheckbox', false);

  const showApplyButton = boolean('show apply button', false);

  const closeOnSelect = boolean('close on select', true);

  const icon = text('icon', '');

  const placeholder = text('placeholder', 'Select');

  const selectAllLabel = text('select all label', 'Select All');

  const inlineLabel = text('inline label', '');

  const labelLimit = number('trigger label limit', 2);

  const maxHeight = number('maximum height', 200);

  const loadersCount = number('Loaders Count', 10);

  const getSearchedOptions = (options: any, searchTerm: string) => {
    const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm: string) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<any>(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const customLabel = (selectedLength: number, totalOptions?: number) => {
    const optionsLength = totalOptions ? totalOptions : dropdownOptions.length;
    return `${selectedLength} of ${optionsLength} are selected`;
  };

  const onChangeHandler = (selectedValues: any[]) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const onClose = (selectedValues: any[]) => {
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
    <div style={{ width: '170px', marginLeft: '128px' }} key={key}>
      <Dropdown
        {...props}
      />
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
      icon: 'events',
      subInfo: 'subInfo',
    });
  }

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  return (
    <div className='w-25' style={{ minHeight: '280px' }}>
      <Dropdown
        fetchOptions={fetchOptions}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown/All',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
