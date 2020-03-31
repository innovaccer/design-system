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

  const stateLimit = number('state limit', 30);

  const maxHeight = number('maximum height', 200);

  const limit = number('limit', 10);

  const subheading = { 0: 'subheading', 40: 'sub' };

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
    stateLimit,
    maxHeight,
    limit,
    subheading,
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

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Dropdown' };
