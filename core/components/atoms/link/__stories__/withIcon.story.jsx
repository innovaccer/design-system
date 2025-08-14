import * as React from 'react';
import { Link, Icon } from '@/index';

// CSF format story
export const withIcon = () => {
  const href = 'http://innovaccer.com';
  const target = '_blank';
  const size = 'regular';
  const disabled = false;

  const options = {
    href,
    target,
    size,
    disabled,
  };

  return (
    <div className="d-flex justify-content-between w-50">
      <Link {...options} className="d-inline-flex align-items-center">
        <Icon name="book" className="mr-3" />
        Read more
      </Link>

      <Link {...options} size="tiny" className="d-inline-flex align-items-center">
        Read more
        <Icon name="book" size={14} className="ml-3" />
      </Link>
    </div>
  );
};

export default {
  title: 'Components/Link/With Icon',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link',
      },
    },
  },
};
