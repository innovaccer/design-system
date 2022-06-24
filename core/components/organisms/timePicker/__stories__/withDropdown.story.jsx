import * as React from 'react';
import { TimePicker } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const timePickerAsDropdown = () => {
  const inputFormat = 'hh:mm AM';

  const outputFormat = 'hh:mm';

  const onTimeChange = (val) => {
    return action(`updated time: ${val}`)();
  };

  return (
    <div className="w-25">
      <TimePicker
        key={`${inputFormat}${outputFormat}`}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        onTimeChange={onTimeChange}
        withDropdown={true}
        withDropdownOptions={{
          startTime: '10:15 AM',
          endTime: '11:15 PM',
          interval: 20
        }}
      />
    </div>
  );
};

const customCode = `() => {
  const onTimeChange = (val) => {
    console.log(val);
  };

  return (
    <div className="w-25">
      <TimePicker
        inputFormat={'hh:mm AM'}
        outputFormat={'hh:mm AM'}
        onTimeChange={onTimeChange}
        withDropdown={true}
        withDropdownOptions={{
          startTime: '10:15 AM',
          endTime: '11:15 PM',
        }}
      />
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/Time Picker As Dropdown',
  component: TimePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
      },
    },
  },
};
