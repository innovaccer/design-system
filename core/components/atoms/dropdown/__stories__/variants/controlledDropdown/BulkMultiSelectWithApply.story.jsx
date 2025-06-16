import * as React from 'react';
import { action } from '@/utils/action';
import Dropdown from '@/components/atoms/dropdown';
import { Uncontrolled, Controlled } from '../../_common_/types';
import Text from '@/components/atoms/text';
import { dropdownOptions } from '../../Options';

// CSF format story
export const bulkMultiSelectWithApplyButton = () => {
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

  const onPopperToggle = (popperIsOpen) => {
    setOpen(popperIsOpen);
  };

  const onUpdate = (type, _options, recentSelected) => {
    switch (type) {
      case 'apply-selected':
        setSelected(recentSelected);
        return;
      case 'cancel-selected':
        return action('cancel event triggered')();
      default:
        return;
    }
  };

  return (
    <div className="w-25">
      <Text weight="strong">{'Options > 50'}</Text>
      <br />
      <br />
      <Dropdown
        fetchOptions={fetchOptions}
        onPopperToggle={onPopperToggle}
        onUpdate={onUpdate}
        selected={selected}
        onChange={onChangeHandler}
        withCheckbox={true}
        showApplyButton={true}
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

  const onPopperToggle = (popperIsOpen, type) => {
    setOpen(popperIsOpen);
    console.log(\`type: \${type}\`);
  }

  const onUpdate = (type, options, recentSelected) => {
    switch (type) {
      case 'apply-selected':
        setSelected(recentSelected);
        return;
      case 'cancel-selected':
        console.log('cancel-clicked');
      default:
        return;
    }
  };

  const onClose = (values) => {
    console.log(\`dropdown closed with selected values: \${values}\`)
  };

  return (
    <div className="w-25">
      <Text weight="strong">{'Options > 50'}</Text><br /><br />
      <Dropdown
        fetchOptions={fetchOptions}
        onPopperToggle={onPopperToggle}
        onUpdate={onUpdate}
        selected={selected}
        onChange={onChangeHandler}
        withCheckbox={true}
        showApplyButton={true}
        open={open}
        onClose={onClose}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/ControlledDropdown/Bulk Multi Select With Apply Button',
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
