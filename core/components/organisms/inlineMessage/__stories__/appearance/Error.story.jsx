import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const alert = () => <InlineMessage appearance="alert" description="Inline message goes here." />;

export default {
  title: 'Components/Indicators/InlineMessage/Appearance/Alert',
  component: InlineMessage,
};
