import * as React from 'react';
import { TimePicker, Label } from '@/index';
import { TimePickerWithSearch } from '../TimePickerWithSearch';

// CSF format story
export const FromTo = () => {
  const [startTime, setStartTime] = React.useState('00:00');

  const onFromChangeHandler = (props) => {
    setStartTime(props);
  };

  return (
    <div className="d-flex">
      <div className="w-25 mr-5">
        <Label withInput={true}>From</Label>
        <TimePicker
          withSearch={true}
          startTime="00:15 AM"
          endTime="11:45 PM"
          onChange={onFromChangeHandler}
          id="From"
        />
      </div>

      <div className="w-25">
        <Label withInput={true}>To</Label>
        <TimePicker withSearch={true} startTime={startTime} endTime="11:45 PM" showDuration={true} id="To" />
      </div>
    </div>
  );
};

const customCode = `() => {

  const [startTime, setStartTime] = React.useState('00:00');

  const onFromChangeHandler = (props) => {
    setStartTime(props);
  };

  return (
    <div className="d-flex">
      <div className="w-25 mr-5">
        <Label withInput={true}>From</Label>
        <TimePicker withSearch={true} startTime="00:15 AM" endTime="11:45 PM" onChange={onFromChangeHandler} id="From" />
      </div>

      <div className="w-25">
        <Label withInput={true}>To</Label>
        <TimePicker withSearch={true} startTime={startTime} endTime="11:45 PM" showDuration={true} id="To" />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/TimePickerWithSearch/From To',
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
