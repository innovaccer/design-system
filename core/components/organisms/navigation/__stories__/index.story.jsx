import * as React from 'react';
import { Navigation } from '@/index';

// CSF format story
export const all = () => {
  const menus = [
    {
      name: 'home',
      label: 'Home',
      icon: 'home',
    },
    {
      name: 'records',
      label: 'Records',
      icon: 'folder',
    },
  ];

  return (
    <Navigation
      type="vertical"
      align="left"
      menus={menus}
      expanded={true}
      rounded={false}
      autoCollapse={true}
      aria-label="Legacy product navigation"
    />
  );
};

export default {
  title: 'Components/Navigation (Deprecated)/All',
  component: Navigation,
  parameters: {
    docs: {
      docPage: {
        title: 'Navigation',
        isDeprecated: true,
        description:
          'Navigation component has been deprecated, please use [VerticalNav](https://mds.innovaccer.com/?path=/docs/components-verticalnav-verticalnav-all--all) and [HorizontalNav](https://mds.innovaccer.com/?path=/docs/components-horizontalnav-all--all) components instead.',
      },
    },
  },
};
