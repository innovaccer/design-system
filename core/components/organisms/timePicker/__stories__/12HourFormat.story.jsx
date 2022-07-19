import * as React from 'react';
import { TimePicker } from '@/index';
import { action } from '@/utils/action';
import { TimePickerAsDropdown, TimePickerAsInput } from './_common_/types';

// CSF format story
export const TimePicker12HourFormat = () => {
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
        startTime="10:15 AM"
        endTime="11:15 PM"
        showTimeDifference={true}
        onChange={onChangeHandler}
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
        startTime="10:15 AM"
        endTime="11:15 PM"
        showTimeDifference={true}
        onChange={onChangeHandler}
      />
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/Time Picker 12 Hour Format',
  component: TimePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
        props: {
          components: { TimePickerAsInput, TimePickerAsDropdown },
        },
      },
    },
  },
};
