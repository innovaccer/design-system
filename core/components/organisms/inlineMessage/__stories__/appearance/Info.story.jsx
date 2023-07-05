import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const info = () => <InlineMessage appearance="info" description="There are two new referral requests." />;

export default {
  title: 'Indicators/InlineMessage/Appearance/Info',
  component: InlineMessage,
};
