import * as React from 'react';
import { action } from '@/utils/action';
import { EditableChipInput } from '@/index';

// CSF format story

export const uncontrolled = () => {
  const onClick = (item) => action(`onClick: ${item}`);
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-440)',
  };
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
  const onClick = (item) => console.log(\`onClick: \${item}\`);
  const chipOptions = {
    onClick,
    clearButton: true,
    maxWidth: 'var(--spacing-440)',
  };
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
  title: 'Components/Inline Editable Fields/EditableChipInput/Uncontrolled',
  component: EditableChipInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
