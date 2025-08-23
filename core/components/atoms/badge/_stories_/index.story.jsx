import * as React from 'react';
import { Badge } from '@/index';

// CSF format story
export const all = () => {
  return <Badge>Approved</Badge>;
};

export default {
  title: 'Components/Badge/All',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge',
        propDescription: `Note: All the valid properties of HTML SPAN elements are acceptable as a prop`,
      },
    },
  },
};
