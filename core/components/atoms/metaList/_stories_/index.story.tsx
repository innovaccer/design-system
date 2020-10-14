import * as React from 'react';
import MetaList from '../MetaList';
import { boolean } from '@storybook/addon-knobs';

// CSF format story
export const all = () => {
  const seperator = boolean('seperator', true);

  const list = [
    {
      label: 'Meta data', icon: 'assessment'
    },
    {
      label: 'Meta data', icon: 'assessment'
    }
  ];

  return (
    <div>
      <MetaList
        list={list}
        seperator={seperator}
      />
    </div>
  );
};

export default {
  title: 'Atoms|MetaList',
  component: MetaList
};
