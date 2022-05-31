import * as React from 'react';
import Spinner from '../Spinner';
import Text from '@/components/atoms/text';

// CSF format story
export const inlineLoader = () => (
  <div className="d-flex">
    <Spinner appearance="primary" size="small" className="mr-3" />
    <Text>uploading...</Text>
  </div>
);

export default {
  title: 'Components/Loaders/Spinner/Inline Loader',
  component: Spinner,
};
