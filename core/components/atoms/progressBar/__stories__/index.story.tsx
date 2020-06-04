import * as React from 'react';
import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ProgressBar from '../ProgressBar';

// CSF format story
export const all = () => {
  const value = number('value', 10);

  const onChange = (completedValue: number) => {
    return action(`selected values length: ${completedValue}`)();
  };

  return (
    <div style={{ width: '400px' }}>
      <ProgressBar
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default {
  title: 'Atoms|ProgressBar',
  component: ProgressBar
};
