import * as React from 'react';
import { StatusHint } from '@/index';

export const alert = () => <StatusHint appearance="alert">{'Alert'}</StatusHint>;

export default {
  title: 'Components/StatusHint/Variants/Alert',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint',
      },
    },
  },
};
