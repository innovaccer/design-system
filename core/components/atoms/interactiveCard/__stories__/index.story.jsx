import * as React from 'react';
import { InteractiveCard } from '@/index';

// CSF format story
export const all = () => {
  return (
    <div className="d-flex">
      <InteractiveCard type="radio" id="r1" name="selected-item">
        card 1
      </InteractiveCard>

      <InteractiveCard type="radio" id="r2" name="selected-item">
        card 2
      </InteractiveCard>
    </div>
  );
};

export default {
  title: 'Layout/Interactive Card/All',
  component: InteractiveCard,
  parameters: {
    docs: {
      docPage: {
        title: 'InteractiveCard',
      },
    },
  },
};
