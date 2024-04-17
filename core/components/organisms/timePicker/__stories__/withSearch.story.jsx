import * as React from 'react';
import { TimePicker, Label, Row } from '@/index';
import { action } from '@/utils/action';
import { TimePickerWithSearch } from '../TimePickerWithSearch';

// CSF format story
export const withSearch = () => {
  const onChangeHandler = (props) => {
    return action(`updated time: ${props}`)();
  };

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format</Label>
        <TimePicker
          withSearch={true}
          startTime="00:00 AM"
          endTime="11:59 PM"
          onChange={onChangeHandler}
          noResultMessage="Invalid Time"
          id="12-hour"
        />
      </div>
      <div className="w-25 ml-7">
        <Label>24 Hour Format</Label>
        <TimePicker
          withSearch={true}
          startTime="00:00 AM"
          endTime="11:59 PM"
          timeFormat="24-Hour"
          onChange={onChangeHandler}
          noResultMessage="Invalid Time"
          id="24-hour"
        />
      </div>
    </Row>
  );
};

const customCode = `() => {

  const onChangeHandler = (props) => {
    console.log(props);
  };

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format</Label>
        <TimePicker 
          withSearch={true} 
          startTime="00:00 AM" 
          endTime="11:59 PM" 
          onChange={onChangeHandler} 
          noResultMessage="Invalid Time"
          id="12-hour"
        />
      </div>
      <div className="w-25 ml-7">
        <Label>24 Hour Format</Label>
        <TimePicker
          withSearch={true}
          startTime="00:00 AM"
          endTime="11:59 PM"
          timeFormat="24-Hour"
          onChange={onChangeHandler}
          noResultMessage="Invalid Time"
          id="24-hour"
        />
      </div>
  </Row>
  );
}`;

export default {
  title: 'Components/TimePicker/TimePickerWithSearch/With Search',
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
