import * as React from 'react';
import Spinner from '../Spinner';

// CSF format story
export const all = () => {
  const appearance = 'white';

  const size = 'small';

  const options = {
    appearance,
    size,
  };

  return (
    <div className={appearance === 'white' ? 'bg-dark' : 'bg-transparent'}>
      <Spinner {...options} />
    </div>
  );
};

export default {
  title: 'Indicators/Loaders/Spinner/All',
  component: Spinner,
};
