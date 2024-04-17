import * as React from 'react';
import { Link } from '@/index';

// CSF format story
export const size = () => {
  return (
    <div className="d-flex">
      <Link href="http://innovaccer.com" size="regular">
        Regular Link
      </Link>
      <Link href="http://innovaccer.com" size="tiny" className="ml-7 mt-2">
        Tiny Link
      </Link>
    </div>
  );
};

export default {
  title: 'Components/Link/Variants/Size',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link',
      },
    },
  },
};
