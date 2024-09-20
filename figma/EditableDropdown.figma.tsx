import React from 'react';
import { EditableDropdown } from '@/index';
import figma from '@figma/code-connect';

figma.connect(EditableDropdown, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=800-2233', {
  imports: ["import { EditableDropdown } from '@innovaccer/design-system'"],
  variant: { Type: 'Dropdown' },
  example: (props) => (
    <EditableDropdown
      {...props}
      placeholder="Select Option"
      dropdownOptions={{
        options: [
          { label: 'Edit', value: 'edit' },
          { label: 'Export', value: 'export' },
          { label: 'Delete', value: 'delete' },
        ],
      }}
    />
  ),
});
