import * as React from 'react';
import { Spinner, Text } from '@/index';

// CSF format story
export const inlineLoader = () => (
  <div className="d-flex">
    <Spinner appearance="primary" size="small" className="mr-3" />
    <Text>uploading...</Text>
  </div>
);

export default {
  title: 'Components/Progress Indicators/Spinner/Inline Loader',
  component: Spinner,
};
