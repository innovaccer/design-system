import * as React from 'react';
import Radio from '../index';

export const OverflowContent = () => (
  <div className="w-25">
    <Radio
      label="Share both your healthcare data and some personal information."
      name="options"
      value="Option 1"
    />
  </div>
);

export default {
  title: 'Components/Radio/Overflow Content',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
