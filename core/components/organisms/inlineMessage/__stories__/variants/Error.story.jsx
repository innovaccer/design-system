import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const alertMessage = () => <InlineMessage appearance="alert" description="Inline message goes here." />;

export default {
  title: 'Components/InlineMessage/Variants/Alert Message',
  component: InlineMessage,
};
