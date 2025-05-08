import React from 'react';
import { DateRangePicker } from '@/index';
import { DateRangePickerProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(DateRangePicker, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1321-6336', {
  imports: ["import { DateRangePicker } from '@innovaccer/design-system'"],
  props: {
    size: figma.enum('Size', {
      Regular: 'large',
      Small: 'small',
    }),
    monthsInView: figma.enum('Range', {
      'Across months': 2,
      'Within a month': 1,
    }),
  },
  example: (props) => <DateRangePicker {...(props as DateRangePickerProps)} />,
});
