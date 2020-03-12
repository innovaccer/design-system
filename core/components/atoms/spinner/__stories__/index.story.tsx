import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Spinner from '../Spinner';

// CSF format story
export const spinner = () => {
  const appearance = select(
    'appearance',
    ['primary', 'secondary', 'white'],
    undefined
  );

  const size = select(
    'size',
    ['small', 'medium', 'large'],
    undefined
  );

  const options = {
    appearance,
    size
  };

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Spinner {...options} />
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Loaders/Spinner' };
