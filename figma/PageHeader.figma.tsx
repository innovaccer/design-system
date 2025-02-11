import React from 'react';
import { PageHeader, HorizontalNav, Tabs, Button } from '@/index';
import figma from '@figma/code-connect';

// Level 0 - PageHeader
figma.connect(PageHeader, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=90-1130', {
  imports: ["import { PageHeader } from '@innovaccer/design-system'"],
  props: {
    navigation: figma.enum('Variant', {
      'With navigation': (
        <HorizontalNav
          menus={[
            {
              name: 'page_1',
              label: 'Page 1',
            },
            {
              name: 'page_2',
              label: 'Page 2',
            },
          ]}
        />
      ),
    }),
    tabs: figma.enum('Variant', {
      'With tabs': (
        <Tabs
          tabs={[
            {
              count: 4,
              label: 'Tab 1',
            },
            {
              count: 4,
              label: 'Tab 2',
            },
            {
              count: 4,
              label: 'Tab 3',
            },
          ]}
        />
      ),
    }),
  },
  example: (props) => <PageHeader title="Page title" {...props} />,
});

// Level 1 - PageHeader

figma.connect(PageHeader, 'https://www.figma.com/design/w8sqBtJpvq86D06UE7gN0T/MDS---Web?node-id=1470-10193', {
  imports: ["import { PageHeader } from '@innovaccer/design-system'"],
  props: {
    navigation: figma.enum('Variant', {
      'With navigation': (
        <HorizontalNav
          menus={[
            {
              name: 'page_1',
              label: 'Page 1',
            },
            {
              name: 'page_2',
              label: 'Page 2',
            },
          ]}
        />
      ),
    }),
    tabs: figma.enum('Variant', {
      'With tabs': (
        <Tabs
          tabs={[
            {
              count: 4,
              label: 'Tab 1',
            },
            {
              count: 4,
              label: 'Tab 2',
            },
            {
              count: 4,
              label: 'Tab 3',
            },
          ]}
        />
      ),
    }),
    button: figma.enum('Back button', {
      True: <Button icon="arrow_back" size="tiny" largeIcon={true} />,
    }),
  },
  example: (props) => <PageHeader title="Page title" {...props} />,
});
