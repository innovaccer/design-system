import * as React from 'react';
import { Badge } from '@/index';

// CSF format story
export const solidWarning = () => {
  return <Badge appearance="warning">Pending</Badge>;
};

export default {
  title: 'Components/Badge/Solid Warning',
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
