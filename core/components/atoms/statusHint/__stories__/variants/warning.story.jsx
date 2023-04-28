import * as React from 'react';
import { StatusHint } from '@/index';

export const warning = () => <StatusHint appearance="warning">Warning</StatusHint>;

export default {
  title: 'Components/StatusHint/Variants/Warning',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint',
      },
    },
  },
};
