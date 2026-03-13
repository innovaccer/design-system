import * as React from 'react';
import { Spinner } from '@/index';

// CSF format story
export const all = () => {
  return <Spinner />;
};

export default {
  title: 'Components/Progress Indicators/Spinner/All',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        a11yPropsTable: ['aria-label'],
        title: 'Spinner',
      },
    },
  },
};
