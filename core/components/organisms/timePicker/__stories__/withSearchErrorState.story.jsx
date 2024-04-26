import * as React from 'react';
import { TimePicker, Label, HelpText } from '@/index';
import { action } from '@/utils/action';
import { TimePickerWithSearch } from '../TimePickerWithSearch';

// CSF format story
export const withSearchErrorState = () => {
  const onChangeHandler = (props) => {
    return action(`updated time: ${props}`)();
  };

  return (
    <div className="w-25">
      <Label>Time</Label>
      <TimePicker
        withSearch={true}
        startTime="00:00 AM"
        endTime="11:59 PM"
        onChange={onChangeHandler}
        noResultMessage="Invalid Time"
        id="12-hour"
        error={true}
      />
      <HelpText error={true} message={'Error message goes here.'} />
    </div>
  );
};

const customCode = `() => {

  const onChangeHandler = (props) => {
    console.log(props);
  };

  return (
    <div className="w-25">
      <Label>Time</Label>
      <TimePicker
        withSearch={true}
        startTime="00:00 AM"
        endTime="11:59 PM"
        onChange={onChangeHandler}
        noResultMessage="Invalid Time"
        id="12-hour"
        error={true}
      />
      <HelpText error={true} message={'Error message goes here.'} />
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/TimePickerWithSearch/With Search Error State',
  component: TimePickerWithSearch,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
      },
    },
  },
};
