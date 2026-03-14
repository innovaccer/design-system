import * as React from 'react';
import { TimePicker, Label, Row } from '@/index';
import { TimePickerWithSearch } from '../TimePickerWithSearch';

// CSF format story
export const TimeIntervals = () => {
  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format (1 hour Interval)</Label>
        <TimePicker
          withSearch={true}
          interval={60}
          id="12-hour"
          aria-label="12 hour time selector"
          optionsAriaLabel="12 hour time options"
        />
      </div>

      <div className="w-25 ml-7">
        <Label>24 Hour Format (1 hour Interval)</Label>
        <TimePicker
          timeFormat="24-Hour"
          withSearch={true}
          interval={60}
          id="24-hour"
          aria-label="24 hour time selector"
          optionsAriaLabel="24 hour time options"
        />
      </div>
    </Row>
  );
};

const customCode = `() => {

  return (
    <Row>
      <div className="w-25">
        <Label>12 Hour Format (1 hour Interval)</Label>
        <TimePicker
          withSearch={true}
          interval={60}
          id="12-hour"
          aria-label="12 hour time selector"
          optionsAriaLabel="12 hour time options"
        />
      </div>

      <div className="w-25 ml-7">
        <Label>24 Hour Format (1 hour Interval)</Label>
        <TimePicker
          timeFormat="24-Hour"
          withSearch={true}
          interval={60}
          id="24-hour"
          aria-label="24 hour time selector"
          optionsAriaLabel="24 hour time options"
        />
      </div>
    </Row>
  );
}`;

export default {
  title: 'Components/TimePicker/TimePickerWithSearch/Time Intervals',
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
