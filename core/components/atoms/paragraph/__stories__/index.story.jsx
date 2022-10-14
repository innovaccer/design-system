import * as React from 'react';
import Paragraph from '../index';

// CSF format story
export const all = () => {
  const appearance = 'white';
  const options = {
    appearance,
  };

  return (
    <div className={appearance === 'white' ? 'bg-dark' : 'bg-transparent'}>
      <Paragraph {...options}>
        Paragraph <b>component</b> have different varients, look for options in knobs tab.
      </Paragraph>
    </div>
  );
};

export default {
  title: 'Components/Paragraph/All',
  component: Paragraph,
  parameters: {
    docs: {
      docPage: {
        title: 'Paragraph',
      },
    },
  },
};
