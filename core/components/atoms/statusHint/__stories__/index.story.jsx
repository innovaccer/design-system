import * as React from 'react';
import { StatusHint } from '@/index';

// CSF format story
export const all = () => {
  const children = 'Status Hint';

  const appearance = 'success';

  const options = {
    appearance,
  };

  return <StatusHint {...options}>{children}</StatusHint>;
};

export default {
  title: 'Indicators/StatusHint/All',
  component: StatusHint,
};
