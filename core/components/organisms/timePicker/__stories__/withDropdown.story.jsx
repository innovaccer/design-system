import * as React from 'react';
import { TimePicker } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const timePickerAsDropdown = () => {
  const inputFormat = 'hh:mm AM';

  const outputFormat = 'hh:mm';

  const onChangeHandler = (props) => {
    return action(`updated time: ${props}`)();
  };

  return (
    <div className="w-25">
      <TimePicker
        key={`${inputFormat}${outputFormat}`}
        withDropdown={true}
        withDropdownOptions={{
          startTime: '10:15 AM',
          endTime: '11:15 PM',
          showTimeDifference: true,
          referenceTime: '08:00 AM',
          onChange: onChangeHandler,
        }}
      />
    </div>
  );
};

const customCode = `() => {

  const onChangeHandler = (props) => {
    console.log(props);
  };

  return (
    <div className="w-25">
      <TimePicker
        withDropdown={true}
        withDropdownOptions={{
          startTime: '10:15 AM',
          endTime: '11:15 PM',
          showTimeDifference: true,
          referenceTime: '08:00 AM',
          onChange: onChangeHandler
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
