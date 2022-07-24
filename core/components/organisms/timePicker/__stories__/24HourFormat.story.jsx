import * as React from 'react';
import { TimePicker } from '@/index';
import { TimePickerAsDropdown } from '../TimePickerAsDropdown';
import { TimePickerAsInput } from '../TimePickerAsInput';

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
  component: TimePickerAsInput,
  subcomponents: { TimePickerAsDropdown },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
      },
    },
  },
};
