import * as React from 'react';
import Spinner from '../Spinner';

// CSF format story
export const modalLoader = () => <Spinner appearance="primary" size="medium" />;

export default {
  title: 'Indicators/Loaders/Spinner/Modal Loader',
  component: Spinner,
};
