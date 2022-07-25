import * as React from 'react';
import { TimePicker } from '@/index';
import { action } from '@/utils/action';
import { TimePickerAsDropdown } from '../TimePickerAsDropdown';
import { TimePickerAsInput } from '../TimePickerAsInput';

// CSF format story
export const TimePicker12HourFormat = () => {
  const onChangeHandler = (props) => {
    return action(`updated time: ${props}`)();
  };

  return (
    <div className="w-25">
      <TimePicker
        withSearch={true}
        startTime="07:00 AM"
        endTime="11:59 PM"
        showDuration={true}
        onChange={onChangeHandler}
        disabledSlotList={['08:00 AM', '02:00 PM']}
        noResultMessage="Invalid Time"
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
        withSearch={true}
        startTime="07:00 AM"
        endTime="11:59 PM"
        showDuration={true}
        onChange={onChangeHandler}
        disabledSlotList={['08:00 AM', '02:00 PM']}
        noResultMessage="Invalid Time"
      />
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/Time Picker 12 Hour Format',
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
