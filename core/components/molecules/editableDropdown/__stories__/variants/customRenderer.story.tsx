import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { EditableDropdown, Label, StatusHint, Icon } from '@/index';

// CSF format story
const options: any = [];
for (let i = 1; i <= 10; i++) {
  options.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
    selected: i === 2
  });
}

export const customRender = () => {
  const onChange = (selectedValues: any) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  const customTrigger = (label: string) => {
    return (
      <div
        className="d-flex align-items-center justify-content-between pl-5 pr-4 bg-secondary cursor-pointer w-100"
        style={{ height: 'var(--spacing-3)' }}
      >
        <StatusHint appearance="warning">{label}</StatusHint>
        <Icon name="keyboard_arrow_down" />
      </div>
    );
  };

  const customRenderer = (label: string) => {
    return (
      <StatusHint appearance="warning">{label}</StatusHint>
    );
  };

  const optionRenderer = (props: any) => {
    const { label } = props.optionData;
    return (
      <StatusHint className="px-5 py-4 cursor-pointer" appearance="warning">{label}</StatusHint>
    );
  };

  return (
    <div className="w-25">
      <Label withInput={true} className="ml-5">Editable Dropdown</Label>
      <EditableDropdown
        customTriggerRenderer={customRenderer}
        dropdownOptions={{
          options,
          onChange,
          optionRenderer,
          triggerOptions: { customTrigger },
        }}
      />
    </div>
  );
};

const customCode = `() => {
  const options = [];
  for (let i = 1; i <= 10; i++) {
    options.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      group: i >= 1 && i <= 40 ? 'Group 1' : 'Group 2',
      selected: i === 2
    });
  };

  const onChange = (selectedValues) => {
    console.log(selectedValues);
  };

  const customRenderer = (label) => {
    return (
      <StatusHint appearance="warning">{label}</StatusHint>
    );
  };

  const optionRenderer = (props) => {
    const { label } = props.optionData;
    return (
      <StatusHint className="px-5 py-4 cursor-pointer" appearance="warning">{label}</StatusHint>
    );
  };

  const customTrigger = (label) => {
    return (
      <div
        className="d-flex align-items-center justify-content-between pl-5 pr-4 bg-secondary cursor-pointer w-100"
        style={{ height: 'var(--spacing-3)' }}
      >
        <StatusHint appearance="warning">{label}</StatusHint>
        <Icon name="keyboard_arrow_down" />
      </div>
    );
  };

  return (
    <div className="w-25">
      <Label withInput={true} className="ml-5">Editable Dropdown</Label>
      <EditableDropdown
        customTriggerRenderer={customRenderer}
        placeholder="Select Option"
        dropdownOptions={{
          options,
          onChange,
          optionRenderer,
          triggerOptions: { customTrigger },
        }}
      />
    </div>
  );
}`;

export default {
  title: 'Components/EditableDropdown/Variants/Custom Render',
  component: EditableDropdown,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
