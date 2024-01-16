import * as React from 'react';
import { Uncontrolled, Controlled } from './_common_/types';
import { action } from '@/utils/action';
import Dropdown from '../Dropdown';
import { dropdownOptions } from './Options';

// CSF format story
export const all = () => {
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
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      icon: "events",
      subInfo: "subInfo",
    });
  }

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  const options = [];
  for (let i = 1; i <= 100; i++) {
    options.push({
      label: \`Option \${i}\`,
      value: \`Option\${i}\`,
    });
  }

  console.log("<<<<<options", options);

  const getSearchedOptions = (options, searchTerm) => {
    const items = [];
    for (let i = 100; i <= 199; i++) {
      items.push({
        label:\`Option \${i}\`,
        value: \`Option\${i}\`,
      });
    }

    const result = items.filter((option) =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return result;
  };

  const updateDropdownData = (options) => {
    console.log("<<<<<< options from api", options);
    return options.map((item) => {
      item.selected = true;
      return item;
    });
  };

  const fetchOptions = (searchTerm) => {
    console.log("<<<<<fetching data");
    const searchedOptions = searchTerm
      ? getSearchedOptions(options, searchTerm)
      : options;
    const data = updateDropdownData(searchedOptions);
    console.log("<<<<<data", data);
    return new Promise((resolve) => {
      resolve({
        searchTerm,
        options: data,
        count: searchedOptions.length,
      });
    });
  };

  return (
    <div className="d-flex">
      <div className="mr-9 w-25">
        <Text weight="strong">{"Without Select All (Options <= 50)"}</Text>
        <br />
        <br />
        <Dropdown
          fetchOptions={fetchOptions}
          withCheckbox={true}
          withSearch={true}
          placeholder={"Select"}
          onChange={onChangeHandler}
          searchPlaceholder={"search"}
        />
      </div>
    </div>
    )
}`;

export default {
  title: 'Inputs/Dropdown/All',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
