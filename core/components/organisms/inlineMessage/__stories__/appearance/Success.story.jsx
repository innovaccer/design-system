import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const success = () => <InlineMessage appearance="success" description="Inline message goes here." />;

export default {
  title: 'Components/InlineMessage/Appearance/Success',
  component: InlineMessage,
};
