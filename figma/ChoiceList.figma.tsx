import React from 'react';
import { ChoiceList } from '@/index';
import figma from '@figma/code-connect';

figma.connect(ChoiceList, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1614-9929', {
  imports: ["import { ChoiceList } from '@innovaccer/design-system'"],
  example: (props) => (
    <ChoiceList
      {...props}
      title="Label"
      choices={[
        {
          label: 'Male',
          name: 'gender',
          value: 'Male',
        },
        {
          label: 'Female',
          name: 'gender',
          value: 'Female',
        },
        {
          label: 'Other',
          name: 'gender',
          value: 'Other',
        },
      ]}
    />
  ),
});

figma.connect(ChoiceList, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1583-10825', {
  imports: ["import { ChoiceList } from '@innovaccer/design-system'"],
  example: (props) => (
    <ChoiceList
      {...props}
      title="Label"
      allowMultiple={true}
      choices={[
        {
          label: 'Male',
          name: 'gender',
          value: 'Male',
        },
        {
          label: 'Female',
          name: 'gender',
          value: 'Female',
        },
        {
          label: 'Other',
          name: 'gender',
          value: 'Other',
        },
      ]}
    />
  ),
});
