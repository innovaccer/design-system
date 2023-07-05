import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const All = () => {
  return <InlineMessage appearance="info" description="There are two new referral requests." />;
};

export default {
  title: 'Indicators/InlineMessage/All',
  component: InlineMessage,
};
