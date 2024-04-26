import * as React from 'react';
import { Pills } from '@/index';

export const alert = () => <Pills appearance="alert">10</Pills>;

export default {
  title: 'Components/Pills/Alert',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
