import React from 'react';
import { EditableInput } from '@/index';
import figma from '@figma/code-connect';

figma.connect(EditableInput, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=800-2233', {
  imports: ["import { EditableInput } from '@innovaccer/design-system'"],
  variant: { Type: 'Regular Text Input' },
  props: {
    error: figma.enum('State', {
      'Error - Focus': true,
    }),
    errorMessage: figma.enum('State', {
      'Error - Focus': 'Short error description goes here',
    }),
  },
  example: (props) => <EditableInput {...props} value="Value" placeholder="Placeholder" size="regular" />,
});

figma.connect(EditableInput, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=800-2233', {
  imports: ["import { EditableInput } from '@innovaccer/design-system'"],
  variant: { Type: 'Small Text Input' },
  props: {
    error: figma.enum('State', {
      'Error - Focus': true,
    }),
    errorMessage: figma.enum('State', {
      'Error - Focus': 'Short error description goes here',
    }),
  },
  example: (props) => <EditableInput {...props} value="Value" placeholder="Placeholder" size="tiny" />,
});
