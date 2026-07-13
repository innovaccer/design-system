import * as React from 'react';
import { Link, Flex } from '@/index';

// CSF format story
export const disabled = () => {
  return (
    <Flex direction="column" gap="spacing-60" className="d-inline-flex">
      <Link
        aria-label="Disabled link"
        disabled={true}
        href="http://innovaccer.com"
        tooltip="You must save changes before proceeding"
      >
        Default Regular Link
      </Link>

      <Link
        aria-label="Disabled link"
        disabled={true}
        appearance="subtle"
        href="http://innovaccer.com"
        tooltip="You must save changes before proceeding"
      >
        Subtle Regular Link
      </Link>

      <Link
        aria-label="Disabled link"
        disabled={true}
        size="tiny"
        href="http://innovaccer.com"
        tooltip="You must save changes before proceeding"
      >
        Default Tiny Link
      </Link>

      <Link
        aria-label="Disabled link"
        disabled={true}
        appearance="subtle"
        size="tiny"
        href="http://innovaccer.com"
        tooltip="You must save changes before proceeding"
      >
        Subtle Tiny Link
      </Link>
    </Flex>
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
