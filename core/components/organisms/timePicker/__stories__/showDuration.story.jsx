import * as React from 'react';
import { TimePicker, Label, Row } from '@/index';
import { TimePickerWithSearch } from '../TimePickerWithSearch';

// CSF format story
export const timeDuration = () => {
  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format</Label>
        <TimePicker startTime="05:00" withSearch={true} showDuration={true} id="12-hour" />
      </div>

      <div className="w-25 ml-7">
        <Label>24 Hour Format</Label>
        <TimePicker startTime="05:00" timeFormat="24-Hour" withSearch={true} showDuration={true} id="24-hour" />
      </div>
    </Row>
  );
};

const customCode = `() => {

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format</Label>
        <TimePicker startTime="05:00" withSearch={true} showDuration={true} id="12-hour" />
      </div>

      <div className="w-25 ml-7">
        <Label>24 Hour Format</Label>
        <TimePicker startTime="05:00" timeFormat="24-Hour" withSearch={true} showDuration={true} id="24-hour" />
      </div>
    </Row>
  );
}`;

export default {
  title: 'Components/TimePicker/TimePickerWithSearch/Time Duration',
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
