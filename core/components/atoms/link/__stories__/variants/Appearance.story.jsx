import * as React from 'react';
import { Link } from '@/index';

// CSF format story
export const appearance = () => {
  return (
    <div className="d-flex">
      <Link appearance="default" href="http://innovaccer.com">
        Default Link
      </Link>
      <Link appearance="subtle" href="http://innovaccer.com" className="ml-7">
        Subtle Link
      </Link>
    </div>
  );
};

export default {
  title: 'Components/Link/Variants/Appearance',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link',
      },
    },
  },
};
