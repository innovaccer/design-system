import React from 'react';
import { AIIconButton } from '@/index';
import { AIIconButtonProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(AIIconButton, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=48860-174507', {
  imports: ["import { AIIconButton } from '@innovaccer/design-system'"],
  props: {
    disabled: figma.enum('State', {
      Disabled: true,
      Default: false,
    }),
    size: figma.enum('Icon size', {
      Regular: 'regular',
      Large: 'large',
    }),
    position: figma.enum('Icon position', {
      Top: 'top',
      Bottom: 'bottom',
    }),
  },
  example: (props) => (
    <AIIconButton {...(props as AIIconButtonProps)} icon="import_contacts" tooltip="Import Contacts" />
  ),
});
