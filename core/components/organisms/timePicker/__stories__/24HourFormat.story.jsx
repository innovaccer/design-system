import * as React from 'react';
import { TimePicker } from '@/index';
import { TimePickerAsDropdown, TimePickerAsInput } from './_common_/types';

// CSF format story
export const TimePicker24HourFormat = () => {
  return (
    <div className="w-25">
      <TimePicker withSearch={true} startTime="00:00" endTime="23:59" timeFormat="24-Hour" />
    </div>
  );
};

const customCode = `() => {

  return (
    <div className="w-25">
      <TimePicker 
        withSearch={true} 
        startTime="00:00" 
        endTime="23:59" 
        timeFormat="24-Hour" 
      />
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/Time Picker 24 Hour Format',
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
