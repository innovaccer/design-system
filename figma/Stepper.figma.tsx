import React from 'react';
import { Stepper } from '@/index';
import figma from '@figma/code-connect';

figma.connect(Stepper, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=219-1254', {
  imports: ["import { Stepper } from '@innovaccer/design-system'"],
  props: {
    steps: figma.enum('Step count', {
      '3': [
        {
          label: 'Step',
          value: 'Step1',
        },
        {
          label: 'Step',
          value: 'Step2',
        },
        {
          label: 'Step',
          value: 'Step3',
        },
      ],
      '4': [
        {
          label: 'Step',
          value: 'Step1',
        },
        {
          label: 'Step',
          value: 'Step2',
        },
        {
          label: 'Step',
          value: 'Step3',
        },
        {
          label: 'Step',
          value: 'Step4',
        },
      ],
      '5': [
        {
          label: 'Step',
          value: 'Step1',
        },
        {
          label: 'Step',
          value: 'Step2',
        },
        {
          label: 'Step',
          value: 'Step3',
        },
        {
          label: 'Step',
          value: 'Step4',
        },
        {
          label: 'Step',
          value: 'Step5',
        },
      ],
    }),
  },
  example: (props) => <Stepper completed={0} active={1} {...props} />,
});
