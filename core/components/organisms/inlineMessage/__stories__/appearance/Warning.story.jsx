import * as React from 'react';
import { InlineMessage } from '@/index';

// CSF format story
export const warning = () => <InlineMessage appearance="warning" description="Inline message goes here." />;

export default {
  title: 'Components/InlineMessage/Appearance/Warning',
  component: InlineMessage,
};
