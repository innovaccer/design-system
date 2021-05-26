import * as React from 'react';
import Checkbox from '../index';

export const OverflowBehavior = () => (
  <div className="w-25">
    <Checkbox
      label="Patient with impaired physical mobility and care deficits."
    />
  </div>
);

export default {
  title: 'Components/Checkbox/Overflow Behavior',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
