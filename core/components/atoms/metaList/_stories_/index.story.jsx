import * as React from 'react';
import { MetaList } from '@/index';

// CSF format story
export const all = () => {
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

  return <MetaList list={list} className="w-25" />;
};

export default {
  title: 'Components/MetaList/All',
  component: MetaList,
};
