import * as React from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Dropdown from '../Dropdown';
import { dropdownOptions } from './Options';

// CSF format story
export const all = () => {
  const triggerSize = select(
    'size',
    ['tiny', 'regular'],
    undefined
  );

  const dropdownAlign = select(
    'Dropdown Alignmnet',
    ['left', 'right'],
    undefined
  );

  const loadingType = select(
    'option type',
    ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'],
    undefined,
  );

  const disabled = boolean('disabled', false);

  const menu = boolean('menu', false);

  const search = boolean('search', false);

  const checkboxes = boolean('checkboxes', false);

  const showApplyButton = boolean('show apply button', false);

  const closeOnSelect = boolean('close on select', true);

  const loading = boolean('loading', false);

  const bulk = boolean('bulk', true);

  const icon = text('icon', '');

  const placeholder = text('placeholder', 'Select');

  const parentCheckboxLabel = text('parentCheckboxLabel', 'Select All');

  const inlineLabel = text('inline label', '');

  const checkedValuesOffset = number('checked offset', 2);

  const maxHeight = number('maximum height', 200);

  const limit = number('limit', 10);

  const getSearchedOptions = (options: any, searchTerm: string) => {
    const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm: string, bulkLimit: number) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<any>(resolve => {
      setTimeout(() => {
        resolve({
          options: searchedOptions.slice(0, bulkLimit),
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChangeTriggerLabel = (selectedLength: number, totalOptions?: number) => {
    const optionsLength = totalOptions ? totalOptions : dropdownOptions.length;
    return `${selectedLength} of ${optionsLength} are selected`;
  };

  const onChangeHandler = (selectedValues: any[]) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const props = {
    triggerSize,
    dropdownAlign,
    icon,
    bulk,
    placeholder,
    inlineLabel,
    disabled,
    menu,
    closeOnSelect,
    search,
    checkboxes,
    showApplyButton,
    checkedValuesOffset,
    maxHeight,
    limit,
    loading,
    fetchOptions,
    loadingType,
    parentCheckboxLabel,
    onChangeTriggerLabel,
    options: dropdownOptions,
    onChange: onChangeHandler,
    maxWidth: 170,
  };

  return (
    <div style={{ width: '170px', marginLeft: '128px' }}>
      <Dropdown
        {...props}
        optionsWrap={true}
      />
    </div>
  );
};

const customCode = `() => {
  const options = [{label: 'Option1',value: 'Option1'},{label: 'Option2',value: 'Option2'},{label: 'Option3',value: 'Option3'},{label: 'Option4',value: 'Option4'},{label: 'Option5',value: 'Option5'},{label: 'Option6',value: 'Option6'},{label: 'Option7',value: 'Option7'},{label: 'Option8',value: 'Option8'},{label: 'Option9',value: 'Option9'},{label: 'Option10',value: 'Option10'}];
  return (
    <div style={{minHeight: '250px', width: '150px'}}>
      <Dropdown
        options={options}
        placeholder={'Select'}
      />
    </div>
  )
}`;

export default {
  title: 'Atoms|Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
