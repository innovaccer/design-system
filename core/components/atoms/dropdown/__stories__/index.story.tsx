import * as React from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Dropdown from '../Dropdown';
import { dropdownOptions } from '../utils/Options';

// CSF format story
export const all = () => {
  const size = select(
    'size',
    ['tiny', 'regular'],
    undefined
  );

  const dropdownAlign = select(
    'dropdownAlign',
    ['left', 'right'],
    undefined
  );

  const disabled = boolean('disabled', false);

  const search = boolean('search', false);

  const checkboxes = boolean('checkboxes', false);

  const showApplyButton = boolean('show apply button', false);

  const closeOnSelect = boolean('close on select', true);

  const loadingOptions = boolean('loading', false);

  const selectAll = boolean('select All', false);

  const icon = text('icon', '');

  const placeholder = text('placeholder', 'Select');

  const inlineLabel = text('inline label', '');

  const checkedValuesOffset = number('checked offset', 2);

  const maxHeight = number('maximum height', 200);

  const limit = number('limit', 10);

  const onChangeHandler = (selectedValues: any[]) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const options = {
    size,
    dropdownAlign,
    icon,
    placeholder,
    inlineLabel,
    disabled,
    closeOnSelect,
    search,
    checkboxes,
    showApplyButton,
    checkedValuesOffset,
    maxHeight,
    limit,
    selectAll,
    loadingOptions,
    options: dropdownOptions,
    onChange: onChangeHandler,
    style: {
      marginLeft: '128px',
    }
  };

  return (
    <div>
      <Dropdown
        {...options}
      />
    </div>
  );
};

const customCode = `() => {
  const options = [{label: 'Option1',value: 'Option1'},{label: 'Option2',value: 'Option2'},{label: 'Option3',value: 'Option3'},{label: 'Option4',value: 'Option4'},{label: 'Option5',value: 'Option5'},{label: 'Option6',value: 'Option6'},{label: 'Option7',value: 'Option7'},{label: 'Option8',value: 'Option8'},{label: 'Option9',value: 'Option9'},{label: 'Option10',value: 'Option10'}];
  return (
    <div style={{minHeight: '250px'}}>
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
