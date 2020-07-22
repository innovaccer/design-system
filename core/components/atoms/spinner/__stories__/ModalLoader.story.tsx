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
  title: 'Atoms|Loaders/Spinner',
  component: Spinner
};
