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
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Spinner {...options} />
    </div>
  );
};

export default {
  title: 'Components/Loaders/Spinner/All',
  component: Spinner,
};
