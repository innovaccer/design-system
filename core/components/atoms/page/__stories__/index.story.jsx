import * as React from 'react';
import { Page, Heading, Text } from '@/index';

// CSF format story
export const all = () => {
  return (
    <Page aria-label="Sample Page" className="p-5">
      <Heading>Page Content</Heading>
      <Text>This is a sample page content to demonstrate the Page component.</Text>
    </Page>
  );
};

export default {
  title: 'Components/Page/All',
  component: Page,
  parameters: {
    docs: {
      docPage: {
        title: 'Page',
        description:
          'Page component is used to create a scrollable container with a fixed height of calc(100dvh - var(--nav-height) (47px)).',
        a11yProps: ` **aria-label:** Add \`aria-label='Page description'\` to describe the page `,
      },
    },
  },
};
