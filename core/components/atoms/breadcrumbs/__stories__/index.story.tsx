import * as React from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

// CSF format story
export const all = () => {
  const lessThan4Levels = boolean(
    'less than 4 levels',
    true
  );

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
    },
    {
      label: 'Level 4',
      link: '/level4'
    },
  ];

  return (
    <div style={{ background: 'var(--secondary-lightest)' }}>
      <Breadcrumbs
        list={lessThan4Levels ? list.slice(0, 4) : list}
        onClick={link => action(`on-click: ${link}`)()}
      />
    </div>
  );
};

const customCode = `() => {
  const lessThan4Levels = false;

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
    },
    {
      label: 'Level 4',
      link: '/level4'
    },
  ];

  return (
    <div style={{ background: 'var(--secondary-lightest)' }}>
      <Breadcrumbs
        list={lessThan4Levels ? list.slice(0, 4) : list}
        onClick={link => console.log(\`on-click: \${link}\`)}
      />
    </div>
  );
}`;

export default {
  title: 'Atoms|Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
