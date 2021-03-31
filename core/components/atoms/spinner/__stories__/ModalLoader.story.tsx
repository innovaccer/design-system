import * as React from 'react';
import Spinner from '../Spinner';

// CSF format story
export const modalLoader = () => (
  <Spinner
    appearance="primary"
    size="medium"
  />
);

export default {
  title: 'Components/Loaders/Spinner/Modal Loader',
  component: Spinner
};
