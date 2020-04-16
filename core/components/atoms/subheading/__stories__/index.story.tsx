import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';
import Subheading from '../index';

// CSF format story
export const all = () => {
  const appearance = optionsKnob(
    'appearance',
    { undefined, default: 'default', subtle: 'subtle', disabled: 'disabled', white: 'white' },
    undefined,
    {
      display: 'inline-radio'
    }
  );

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Subheading
        appearance={appearance}
      >
        Subheading component have different varients, look for options in knobs tab.
      </Subheading>
    </div>
  );
};

const title = 'Atoms|Typography/Subheading';

export default {
  title,
  component: Subheading,
  parameters: {
    docs: {
      docPage: {
        title
      }
    }
  }
};
