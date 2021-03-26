import * as React from 'react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { Link } from '@/index';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const href = text('href', 'http://innovaccer.com');
  const target = select('target', ['_blank', '_self', '_parent', '_top'], '_blank');
  const size = select('size', ['regular', 'tiny'], 'regular');
  const appearance = select('appearance', ['default', 'subtle'], 'default');
  const disabled = boolean('disabled', false);

  const options = {
    href,
    target,
    size,
    appearance,
    disabled
  };

  return (
    <Link {...options} onClick={action('link click')} >
      Click this link.
    </Link>
  );
};

export default {
  title: 'Components/Link/All',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link'
      }
    }
  }
};
