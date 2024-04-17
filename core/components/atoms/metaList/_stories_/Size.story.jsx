import * as React from 'react';
import { Text, MetaList } from '@/index';

// CSF format story
export const size = () => {
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
    <div className="ml-5">
      <Text weight="strong">Small</Text>
      <MetaList className="py-7" list={list} seperator={true} size="small" />

      <Text weight="strong">Regular</Text>
      <MetaList className="py-7" list={list} seperator={true} />
    </div>
  );
};

export default {
  title: 'Components/MetaList/Size',
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
