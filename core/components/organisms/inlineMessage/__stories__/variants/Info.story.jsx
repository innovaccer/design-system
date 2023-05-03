import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const infoMessage = () => <InlineMessage appearance="info" description="There are two new referral requests." />;

export default {
  title: 'Indicators/InlineMessage/Variants/Info Message',
  component: InlineMessage,
};
