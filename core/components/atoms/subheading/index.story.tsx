import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';
import Subheading from './index';

// CSF format story
export const subheading = () => {
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

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography' };
