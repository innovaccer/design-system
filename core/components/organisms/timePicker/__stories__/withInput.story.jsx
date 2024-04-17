import * as React from 'react';
import { TimePicker } from '@/index';
import { action } from '@/utils/action';
import { TimePickerWithInput } from '../TimePickerWithInput';

// CSF format story
export const withInput = () => {
  const inputFormat = 'hh:mm AM';

  const outputFormat = 'hh:mm';

  const onTimeChange = (val) => {
    return action(`updated time: ${val}`)();
  };

  return (
    <div className="w-25">
      <TimePicker
        key={`${inputFormat}${outputFormat}`}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        onTimeChange={onTimeChange}
      />
    </div>
  );
};

const customCode = `() => {
  const onTimeChange = (val) => {
    console.log(val);
  };

  return (
    <div className="w-25">
      <TimePicker
        inputFormat={'hh:mm AM'}
        outputFormat={'hh:mm AM'}
        onTimeChange={onTimeChange}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Timepicker/TimePickerWithInput/With Input',
  component: TimePickerWithInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
      },
    },
  },
};
