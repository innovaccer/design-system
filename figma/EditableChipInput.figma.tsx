import React from 'react';
import { EditableChipInput } from '@/index';
import figma from '@figma/code-connect';

figma.connect(EditableChipInput, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=800-2233', {
  imports: ["import { EditableChipInput } from '@innovaccer/design-system'"],
  variant: { Type: 'Input with Chips' },
  props: {},
  example: (props) => (
    <EditableChipInput {...props} value={['Chip 1', 'Chip 2', 'Chip 3']} placeholder="Placeholder" />
  ),
});
