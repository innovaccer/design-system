import * as React from 'react';
import { Link } from '@/index';

// CSF format story
export const disabled = () => {
  return (
    <div className="d-flex">
      <Link href="http://innovaccer.com" disabled={false}>
        Link Enabled.
      </Link>
      <Link href="http://innovaccer.com" disabled={true} className="ml-7">
        Link Disabled.
      </Link>
    </div>
  );
};

export default {
  title: 'Atoms|Typography/Link/Variants',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link'
      }
    }
  }
};
