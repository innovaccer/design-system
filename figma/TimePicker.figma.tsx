import React from 'react';
import { TimePicker } from '@/index';
import figma from '@figma/code-connect';

figma.connect(TimePicker, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=11765-42862', {
  imports: ["import { TimePicker } from '@innovaccer/design-system'"],
  props: {
    open: figma.boolean('Open'),
  },
  example: (props) => <TimePicker {...props} withSearch={true} />,
});

figma.connect(TimePicker, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=12067-42760', {
  imports: ["import { TimePicker } from '@innovaccer/design-system'"],
  props: {
    time: figma.enum('Placeholder', {
      False: '08:00 AM',
    }),
  },
  example: (props) => <TimePicker {...props} />,
});
