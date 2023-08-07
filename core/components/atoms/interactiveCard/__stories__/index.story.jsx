import * as React from 'react';
import { InteractiveCard } from '@/index';

// CSF format story
export const all = () => {
  const list = [
    {
      icon: 'places',
      title: 'card 1',
      description: 'card desc',
    },
    {
      icon: 'event',
      title: 'card 2',
      description: 'card desc',
    },
    {
      icon: 'places',
      title: 'card 3',
      description: 'card desc',
    },
  ];
  return <InteractiveCard cardList={list} />;
};

export default {
  title: 'Layout/Interactive Card/All',
  component: InteractiveCard,
  // subcomponents: { CardItem },
  parameters: {
    docs: {
      docPage: {
        title: 'InteractiveCard',
      },
    },
  },
};
