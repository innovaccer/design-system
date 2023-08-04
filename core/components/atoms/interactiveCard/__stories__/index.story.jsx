import * as React from 'react';
import { InteractiveCard } from '@/index';
import { CardItem } from '../CardItem';

// CSF format story
export const all = () => {
  return (
    <InteractiveCard multiSelect={true} selectedList={['r1']}>
      <div className="d-flex">
        <InteractiveCard.Item id="r1">card 1</InteractiveCard.Item>

        <InteractiveCard.Item id="r2">card 2</InteractiveCard.Item>
      </div>
    </InteractiveCard>
  );
};

export default {
  title: 'Layout/Interactive Card/All',
  component: InteractiveCard,
  subcomponents: { CardItem },
  parameters: {
    docs: {
      docPage: {
        title: 'InteractiveCard',
      },
    },
  },
};
