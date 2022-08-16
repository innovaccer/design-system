import * as React from 'react';
import { TimePicker, DatePicker, Row, Label } from '@/index';
import { TimePickerWithInput } from '../TimePickerWithInput';
import { TimePickerWithSearch } from '../TimePickerWithSearch';

// CSF format story
export const withDatePicker = () => {
  const [open, setOpen] = React.useState(false);

  const handleDateChange = () => {
    setOpen(false);
    window.setTimeout(() => {
      setOpen(true);
    }, 0);
  };

  return (
    <Row>
      <div className="w-25">
        <Label>Date</Label>
        <DatePicker
          firstDayOfWeek="saturday"
          onDateChange={handleDateChange}
          outputFormat="yyyy/mm/dd"
          withInput={true}
          inputOptions={{
            required: true,
          }}
        />
      </div>
      <div className="w-25 ml-7">
        <Label>Time</Label>
        <TimePicker withSearch={true} open={open} />
      </div>
    </Row>
  );
};

const customCode = `() => {

  const [open, setOpen] = React.useState(false);

  const handleDateChange = () => {
      setOpen(false);
      setTimeout(() => {
        setOpen(true);
      }, 0);
    
  };

  return (
    <Row>
      <div className="w-25">
        <Label>Date</Label>
        <DatePicker
          firstDayOfWeek="saturday"
          onDateChange={handleDateChange}
          outputFormat="yyyy/mm/dd"
          withInput={true}
          inputOptions={{
            required: true,
          }}
        />
      </div>
      <div className="w-25 ml-7">
        <Label>Time</Label>
        <TimePicker withSearch={true} open={open} />
      </div>
    </Row>
  );
}`;

export default {
  title: 'Components/TimePicker/With Date Picker',
  component: TimePickerWithInput,
  subcomponents: { TimePickerWithSearch },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
      },
    },
  },
};
