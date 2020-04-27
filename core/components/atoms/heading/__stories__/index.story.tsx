import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';
import Heading from '../index';

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

  const size = optionsKnob(
    'size',
    { undefined, m: 'm', l: 'l', xl: 'xl', xxl: 'xxl' },
    undefined,
    {
      display: 'inline-radio'
    }
  );

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Heading
        appearance={appearance}
        size={size}
      >
        Heading component have different varients, look for options in knobs tab.
      </Heading>
    </div>
  );
};

export default {
  title: 'Atoms|Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading'
      }
    }
  }
};
