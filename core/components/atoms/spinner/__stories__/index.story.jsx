import * as React from 'react';
import { Spinner } from '@/index';

// CSF format story
export const all = () => {
  return <Spinner aria-label="Loading patient records" />;
};

export default {
  title: 'Components/Progress Indicators/Spinner/All',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        a11yProps: `
**aria-label:** Use \`aria-label\` to describe the loading action for screen readers (e.g. \`aria-label="Loading patient records"\`). Defaults to \`"Loading"\`.

**aria-labelledby:** Use \`aria-labelledby\` to reference the ID of an existing visible element that labels the spinner. When provided, \`aria-label\` is suppressed.
        `,
      },
    },
  },
};
