import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { EditableChipInput } from '@/index';

// CSF format story

export const uncontrolled = () => {
  const onClick = (item: any) => action(`onClick: ${item}`);
  const chipOptions = { onClick, clearButton: true };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates: false,
    defaultValue: [],
    autoFocus: true,
  };

  const options = {
    chipInputOptions,
    placeholder: 'Add Value',
  };
  return (
    <div className="w-25">
      <EditableChipInput {...options} />
    </div>
  );
};

const customCode = `() => {
  const onClick = (item) => console.log(\`\onClick: \${item}\`);
  const chipOptions = { onClick, clearButton: true };
  const chipInputOptions = {
    chipOptions,
    allowDuplicates: false,
    defaultValue: [],
    autoFocus: true,
  };

  const options = {
    chipInputOptions,
    placeholder: 'Add Value',
  };
  return (
    <div className="w-25">
      <EditableChipInput {...options} />
    </div>
  );
}`;

export default {
  title: 'Components/EditableChipInput/Uncontrolled',
  component: EditableChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
