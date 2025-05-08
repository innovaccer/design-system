import * as React from 'react';
import { action } from '@/utils/action';
import Dropdown from '@/components/atoms/dropdown';
import { Uncontrolled, Controlled } from '../../_common_/types';
import { dropdownOptions } from '../../Options';

// CSF format story
export const singleSelect = () => {
  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

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

  const onChangeHandler = (selectedValues) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const onUpdate = (_type, option) => {
    this.window.setTimeout(() => {
      setSelected([option]);
    }, 2000);
  };

  const onPopperToggle = (updatedOpen) => {
    setOpen(updatedOpen);
  };

  return (
    <div className="w-25 mb-13">
      <Dropdown
        fetchOptions={fetchOptions}
        onUpdate={onUpdate}
        selected={selected}
        onChange={onChangeHandler}
        onPopperToggle={onPopperToggle}
        open={open}
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
      icon: 'event',
      subInfo: 'subInfo',
    });
  }

  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      this.window.setTimeout(() => {
        resolve({
          searchTerm,
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  const onUpdate = (_type, option) => {
    this.window.setTimeout(() => {
      setSelected([option]);
    }, 2000);
  };

  const onPopperToggle = (updatedOpen, type) => {
    console.log(type)
    setOpen(updatedOpen);
  }

  const onClose = (values) => {
    console.log(values);
  }

  return (
    <div className="w-25">
      <Dropdown
        fetchOptions={fetchOptions}
        onUpdate={onUpdate}
        selected={selected}
        onChange={onChangeHandler}
        onPopperToggle={onPopperToggle}
        onClose={onClose}
        open={open}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/ControlledDropdown/Single Select',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Controlled Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
