import React from 'react';
import { Tooltip } from '@/index';
import { TooltipProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Tooltip, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=99-666', {
  imports: ["import { Tooltip } from '@innovaccer/design-system'"],
  props: {
    position: figma.enum('Position', {
      Bottom: 'bottom',
      Top: 'top',
      Right: 'right',
      Left: 'left',
    }),
  },
  example: (props) => <Tooltip {...(props as TooltipProps)} tooltip="Tooltip" />,
});
