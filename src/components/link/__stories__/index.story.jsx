import * as React from 'react';
import { Link } from '@/index';

export default {
  title: 'Typography/Link',
  component: Link,
  parameters: {
    docs: {
      docPage: {
        title: 'Link',
        description: 'Links are used to navigate to a destination which can be on the same page or a different one.',
        a11yProps: 'For disabled link the **ARIA state** is set to \`aria-disabled="true"\`, which changes the appearance and the \`tabindex="-1"\`.'
      },
    },
  },
};

export const Default = () => {
  return (
    <Link href="https://innovaccer.com">Click this Link</Link>
  );
};

export const Appearances = () => {
  return (
    <div>
      <Link href="https://innovaccer.com">
        Default Link.
      </Link>
      <Link appearance="subtle" className="ml-7" href="https://innovaccer.com">
        Subtle Link.
      </Link>
    </div>
  )
}

export const Size = () => {
  return (
    <div>
      <Link href="https://innovaccer.com">
        Regular Link.
      </Link>
      <Link className="ml-7" href="https://innovaccer.com" size="tiny">
        Tiny Link.
      </Link>
    </div>
  )
}

export const Disabled = () => {
  return (
    <div>
      <Link href="https://innovaccer.com">
        Link Enabled.
      </Link>
      <Link className="ml-7" disabled={true} href="https://innovaccer.com">
        Link Disabled.
      </Link>
    </div>
  )
}

export const Target = () => {
  return (
    <div>
      <Link href="https://innovaccer.com" target="_blank">Blank Target Link</Link>
      <Link className="ml-7" href="https://innovaccer.com" target="_self">Self Target Link</Link>
      <Link className="ml-7" href="https://innovaccer.com" target="_parent">Parent Target Link</Link>
      <Link className="ml-7" href="https://innovaccer.com" target="_top">Top Target Link</Link>
    </div>
  )
}

export const Download = () => {
  return (
    <Link href="https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg" download>
      Download File
    </Link>
  )
}

export const HrefLang = () => {
  return (
    <Link href="https://innovaccer.com" hreflang="en">Click this Link</Link>
  )
}

export const OnClick = () => {
  return (
    <Link href="https://innovaccer.com" target="_blank" onClick={() => console.log('link clicked')}>
      Click this Link
    </Link>
  )
}
