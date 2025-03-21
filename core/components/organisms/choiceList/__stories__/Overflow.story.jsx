import * as React from 'react';
import { Label, ChoiceList } from '@/index';

export const OverflowForCheckbox = () => {
  const options = [
    {
      label: 'A patient with impaired physical mobility and multiple care deficits requiring special assistance.',
      value: 'option-1',
    },
    {
      label: 'A chronic condition that necessitates continuous medical supervision and specialized treatment.',
      value: 'option-2',
    },
  ];

  return (
    <div className="d-flex flex-column">
      <div className="mb-5 w-50">
        <Label>Wrap Enabled:</Label>
        <ChoiceList
          choices={options}
          selected={['option-1']}
          allowMultiple
          wrapLabel={true}
          title="Select an Option"
          type="checkbox"
        />
      </div>
      <div className="w-50">
        <Label>Wrap Disabled</Label>
        <ChoiceList
          choices={options}
          allowMultiple
          selected={['option-1']}
          wrapLabel={false}
          title="Select an Option"
          type="checkbox"
        />
      </div>
    </div>
  );
};

export default {
  title: 'Components/ChoiceList/Overflow For Checkbox',
  component: ChoiceList,
  parameters: {
    docs: {
      docPage: {
        title: 'ChoiceList',
      },
    },
  },
};
