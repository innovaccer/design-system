import * as React from 'react';
import { Link } from '@/index';

// CSF format story
export const disabled = () => {
  return (
    <div className="d-flex">
      <Link href="http://innovaccer.com" disabled={true}>
        Link Disabled
      </Link>
      <Link href="http://innovaccer.com" appearance="subtle" disabled={true} className="ml-7">
        Link Disabled
      </Link>
    </div>
  );
};

export default {
  title: 'Components/Link/Variants/Disabled',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link',
      },
    },
  },
};
