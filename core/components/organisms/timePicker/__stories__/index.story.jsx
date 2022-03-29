import * as React from 'react';
import { TimePicker } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const inputFormat = 'hh:mm AM';

  const outputFormat = 'hh:mm';

  const onTimeChange = (val) => {
    return action(`updated time: ${val}`)();
  };

  return (
    <TimePicker
      key={`${inputFormat}${outputFormat}`}
      inputFormat={inputFormat}
      outputFormat={outputFormat}
      onTimeChange={onTimeChange}
    />
  );
};

const customCode = `() => {
  const onTimeChange = (val) => {
    console.log(val);
  };

  return (
    <TimePicker
      inputFormat={'hh:mm AM'}
      outputFormat={'hh:mm AM'}
      onTimeChange={onTimeChange}
    />
  );
}`;

export default {
  title: 'Components/TimePicker/All',
  component: TimePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker',
      },
    },
  },
};
