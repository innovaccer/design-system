import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Spinner from '../Spinner';

// CSF format story
export const all = () => {
  const appearance = select('appearance', ['primary', 'secondary', 'white'], undefined);

  const size = select('size', ['small', 'medium', 'large'], undefined);

  const options = {
    appearance,
    size,
  };

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Spinner {...options} />
    </div>
  );
};

export default {
  title: 'Components/Loaders/Spinner/All',
  component: Spinner,
};
