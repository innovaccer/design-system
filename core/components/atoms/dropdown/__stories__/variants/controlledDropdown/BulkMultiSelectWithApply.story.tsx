import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown, { EventType } from '@/components/atoms/dropdown';
import { Uncontrolled, Controlled } from '../../_common_/types';
import Text from '@/components/atoms/text';
import { dropdownOptions } from '../../Options';

// CSF format story
export const bulkMultiSelectWithApplyButton = () => {

  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

  const getSearchedOptions = (options: any, searchTerm: string) => {
    const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm: string) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise<any>(resolve => {
      window.setTimeout(() => {
        resolve({
          options: searchedOptions,
          count: searchedOptions.length,
        });
      }, 1000);
    });
  };

  const onChangeHandler = (selectedValues: any[]) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const onPopperToggle = (popperIsOpen: boolean) => {
    setOpen(popperIsOpen);
  };

  const onUpdate = (type: EventType, _options?: any, recentSelected?: any) => {
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

  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

  const getSearchedOptions = (options, searchTerm) => {
    const result = options.filter((option) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
    return result;
  };

  const fetchOptions = (searchTerm) => {
    const searchedOptions = searchTerm ? getSearchedOptions(dropdownOptions, searchTerm) : dropdownOptions;
    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
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
  title: 'Components/Dropdown/Variants/ControlledDropdown/Bulk Multi Select With Apply Button',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Controlled Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
