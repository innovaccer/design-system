import * as React from 'react';
import { MetaList } from '@/index';

// CSF format story
export const WithSeparator = () => {
  const seperator = true;

  const list = [
    {
      label: 'Meta data',
      icon: 'assessment',
    },
    {
      label: 'Meta data',
      icon: 'assessment',
    },
  ];

  return <MetaList list={list} seperator={seperator} />;
};

export default {
  title: 'Components/MetaList/With Separator',
  component: MetaList,
  parameters: {
    docs: {
      docPage: {
        title: 'MetaList',
        props: {
          exclude: ['seperatorAppearance', 'labelAppearance', 'iconAppearance'],
        },
      },
    },
  },
};
