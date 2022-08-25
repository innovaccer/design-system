import * as React from 'react';
import MetaList from '../MetaList';

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

  return (
    <div>
      <MetaList list={list} />
    </div>
  );
};

export default {
  title: 'Components/MetaList/All',
  component: MetaList,
};
