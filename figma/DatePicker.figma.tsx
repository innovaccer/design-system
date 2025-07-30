import React from 'react';
import { DatePicker } from '@/index';
import { DatePickerProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(DatePicker, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1271-9152', {
  imports: ["import { DatePicker } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'large',
      Small: 'small',
    }),
    view: figma.enum('View', {
      Month: 'date',
      Year: 'month',
      Decade: 'year',
    }),
  },
  example: (props) => <DatePicker {...(props as DatePickerProps)} />,
});
