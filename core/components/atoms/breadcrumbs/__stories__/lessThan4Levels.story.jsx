import * as React from 'react';
import { Breadcrumbs } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const lessThan4Levels = () => {
  const list = [
    {
      label: 'Level 0',
      link: '/level0',
    },
    {
      label: 'Level 1',
      link: '/level1',
    },
    {
      label: 'Level 2',
      link: '/level2',
    },
    {
      label: 'Level 3',
      link: '/level3',
    },
  ];

  return (
    <div className="bg-secondary-lightest">
      <Breadcrumbs list={list} onClick={(link) => action(`on-click: ${link}`)()} />
    </div>
  );
};

const customCode = `() => {
  const list = [
    {
      label: 'Level 0',
      link: '/level0'
    },
    {
      label: 'Level 1',
      link: '/level1'
    },
    {
      label: 'Level 2',
      link: '/level2'
    },
    {
      label: 'Level 3',
      link: '/level3'
    }
  ];

  return (
    <div className="bg-secondary-lightest">
      <Breadcrumbs
        list={list}
        onClick={link => console.log(\`on-click: \${link}\`)}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Breadcrumbs/Less Than 4 Levels',
  component: Breadcrumbs,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
