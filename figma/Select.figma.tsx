import React from 'react';
import { Select, Button } from '@/index';
import { SelectProps } from '@/index.type';
import figma from '@figma/code-connect';

// Select - Trigger
figma.connect(Select, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=177-965', {
  imports: ["import { Select } from '@innovaccer/design-system'"],
  props: {
    triggerSize: figma.enum('Size', {
      Regular: 'regular',
      Small: 'small',
    }),
    icon: figma.enum('Icon', {
      True: 'event',
      False: undefined,
    }),
    placeholder: figma.enum('Placeholder', {
      True: 'Select',
      False: undefined,
    }),
    disabled: figma.enum('State', {
      Disabled: true,
    }),
    withClearButton: figma.enum('Placeholder', {
      False: true,
      True: false,
    }),
    value: figma.enum('Placeholder', {
      False: { label: 'Label 1', value: 'Label 1' },
    }),
  },
  example: ({ triggerSize, icon, placeholder, disabled, withClearButton, ...rest }) => {
    return (
      <Select
        {...(rest as SelectProps)}
        onSelect={(selected) => console.log(selected)}
        triggerOptions={{
          triggerSize: triggerSize as any,
          icon: icon as any,
          placeholder: placeholder as any,
          disabled: disabled as any,
          withClearButton: withClearButton as any,
        }}
      >
        <Select.List>
          <Select.Option option={{ label: 'Label 1', value: 'Value 1' }}>Label 1</Select.Option>
          <Select.Option option={{ label: 'Label 2', value: 'Value 2' }}>Label 2</Select.Option>
        </Select.List>
      </Select>
    );
  },
});

// Select - Error State
figma.connect(Select, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=23576-128059', {
  imports: ["import { Select } from '@innovaccer/design-system'"],
  example: (props) => {
    return (
      <Select {...(props as SelectProps)} onSelect={(selected) => console.log(selected)}>
        <Select.EmptyTemplate description="We couldn't load the data, try reloading." title="Failed to fetch data">
          <Button onClick={function () {}} size="tiny" aria-label="Reload" icon="refresh" iconAlign="left">
            Reload
          </Button>
        </Select.EmptyTemplate>
      </Select>
    );
  },
});
