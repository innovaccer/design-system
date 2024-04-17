import * as React from 'react';
import { StatusHint } from '@/index';

export const success = () => <StatusHint appearance="success">{'Success'}</StatusHint>;

export default {
  title: 'Components/Indicators/StatusHint/Variants/Success',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint',
      },
    },
  },
};
