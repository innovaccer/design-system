import React from 'react';
import { Calendar } from '@/index';
import { CalendarProps } from '@/index.type';
import figma from '@figma/code-connect';

figma.connect(Calendar, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1308-5244', {
  imports: ["import { Calendar } from '@innovaccer/design-system'"],
  props: {
    view: figma.enum('View', {
      Month: 'date',
      Year: 'month',
      Decade: 'year',
    }),
    size: figma.enum('Size', {
      Regular: 'large',
      Small: 'small',
    }),
  },
  example: (props) => <Calendar {...(props as CalendarProps)} />,
});
