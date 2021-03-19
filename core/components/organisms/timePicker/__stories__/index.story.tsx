import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import { TimePicker } from '@/index';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const inputFormat = select(
    'inputFormat',
    ['hh:mm AM', 'hh:mm'],
    undefined
  );

  const outputFormat = select(
    'outputFormat',
    ['hh:mm AM', 'hh:mm'],
    undefined
  );

  const onTimeChange = (val?: string) => {
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
  title: 'Components/TimePicker',
  component: TimePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TimePicker'
      }
    }
  }
};
