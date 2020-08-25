import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown, { EventType } from '@/components/atoms/dropdown';
import { Uncontrolled, Controlled } from '../../_common_/types';
import Text from '@/components/atoms/text';
import { dropdownOptions } from '../../Options';

// CSF format story
export const multiSelectWithApplyButton = () => {
  const [selected, setSelected] = React.useState([dropdownOptions[3]]);
  const [open, setOpen] = React.useState(false);

  const onChangeHandler = (selectedValues: any[]) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const onUpdate = (type: EventType, _options?: any, recentSelected?: any) => {
    switch (type) {
      case 'apply-selected':
        setOpen(!open);
        setSelected(recentSelected);
        return;
      case 'cancel-selected':
        setOpen(!open);
        return action('cancel event triggered')();
      default:
        return;
    }
  };

  const onPopperToggle = (isPopperOpen: boolean) => {
    setOpen(isPopperOpen);
  };

  return (
    <div className="w-25">
      <Text weight="strong">{'Options <= 50'}</Text><br /><br />
      <Dropdown
        options={dropdownOptions.slice(0, 50)}
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

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  const onUpdate = (type, options, recentSelected) => {
    switch (type) {
      case 'apply-selected':
        setOpen(!open);
        setSelected(recentSelected);
        return;
      case 'cancel-selected':
        setOpen(!open);
        return action('cancel event triggered')();
      default:
        return;
    }
  };

  const onPopperToggle = (isPopperOpen) => {
    setOpen(isPopperOpen);
  };

  return (
    <div className="w-25">
      <Text weight="strong">{'Options <= 50'}</Text><br /><br />
      <Dropdown
        options={dropdownOptions.slice(0, 50)}
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
}`;

export default {
  title: 'Atoms|Dropdown/Variants/ControlledDropdown',
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
