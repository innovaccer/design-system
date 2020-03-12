import * as React from 'react';
import { optionsKnob } from '@storybook/addon-knobs';
import Paragraph from '../index';

// CSF format story
export const paragraph = () => {
  const appearance = optionsKnob(
    'appearance',
    { white: 'white', destructive: 'destructive', subtle: 'subtle', disabled: 'disabled' },
    undefined,
    {
      display: 'inline-radio'
    }
  );
  const options = {
    appearance
  };

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Paragraph {...options}>
        Paragraph <b>component</b> have different varients, look for options in knobs tab.
      </Paragraph>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography/Paragraph' };
