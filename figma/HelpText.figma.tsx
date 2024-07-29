import React from 'react';
import { HelpText } from '@/index';
import figma from '@figma/code-connect';

figma.connect(HelpText, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=2433-28750', {
  imports: ["import { HelpText } from '@innovaccer/design-system'"],
  example: (props) => <HelpText {...props} message="Help text goes here" />,
});
