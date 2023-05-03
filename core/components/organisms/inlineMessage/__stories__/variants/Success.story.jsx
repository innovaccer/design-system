import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const successMessage = () => <InlineMessage appearance="success" description="Inline message goes here." />;

export default {
  title: 'Indicators/InlineMessage/Variants/Success Message',
  component: InlineMessage,
};
