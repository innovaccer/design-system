import * as React from 'react';
import { StatusHint } from '@/index';

export const defaultStatusHint = () => <StatusHint appearance="default">{'Default'}</StatusHint>;

export default {
  title: 'Components/StatusHint/Variants/Default Status Hint',
  component: StatusHint,
  parameters: {
    docs: {
      docPage: {
        title: 'StatusHint',
      },
    },
  },
};
