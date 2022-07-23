import * as React from 'react';
import { TimePicker, Label } from '@/index';
import { action } from '@/utils/action';
import { TimePickerAsDropdown, TimePickerAsInput } from './_common_/types';

// CSF format story
export const TimePickerAsDropdownFormat = () => {
  const [startTime, setStartTime] = React.useState('');

  React.useEffect(() => {
    // console.log('rerender', startTime);
  }, []);

  const onFromChangeHandler = (props) => {
    React.useCallback(() => {
      // console.log('insdie callback');
      setStartTime(props);
    }, [props]);
    return action(`updated time: ${props}`)();
  };

  const onToChangeHandler = (props) => {
    return action(`updated time: ${props}`)();
  };

  return (
    <div className="d-flex">
      <div className="w-25 mr-5">
        <Label withInput={true}>From</Label>
        <TimePicker
          withDropdown={true}
          startTime="10:15 AM"
          endTime="11:15 PM"
          onChange={onFromChangeHandler}
          disabledOptionList={['11:00 AM', '02:00 PM']}
        />
      </div>

      <div className="w-25">
        <Label withInput={true}>To</Label>
        <TimePicker withDropdown={true} startTime={startTime} showTimeDifference={true} onChange={onToChangeHandler} />
      </div>
    </div>
  );
};

const customCode = `() => {

  const [startToTime, setStartTime] = React.useState('10:00 AM');

  React.useEffect(() => {
    console.log('rerender', startToTime);
  });

  const onFromChangeHandler = React.useCallback((props) => {
    setStartTime(props);
  }, []);

  console.log('startToTime', startToTime);
  return (
    <div className="d-flex">
      <div className="w-25 mr-5">
        <Label withInput={true}>From</Label>
        <TimePicker
          withDropdown={true}
          startTime="10:15 AM"
          endTime="11:15 PM"
          onChange={onFromChangeHandler}
          disabledOptionList={['11:00 AM', '02:00 PM']}
        />
      </div>

      <div className="w-25">
        <Label withInput={true}>To</Label>
        <TimePicker withDropdown={true} startTime={startToTime} showTimeDifference={true} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/TimePicker/Time Picker As Dropdown Format',
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
