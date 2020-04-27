import * as React from 'react';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import Text from '../index';

// CSF format story
export const all = () => {
  const weight = optionsKnob('weight', { strong: 'strong', medium: 'medium' }, undefined, {
    display: 'inline-radio'
  });
  const small = boolean('small', false);
  const appearance = optionsKnob(
    'appearance',
    { default: 'default', white: 'white', destructive: 'destructive', subtle: 'subtle', disabled: 'disabled' },
    undefined,
    {
      display: 'inline-radio'
    }
  );

  const options = {
    weight,
    appearance,
    small
  };

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Text {...options}>Text component have different varients, look for options in knobs tab.</Text>
    </div>
  );
};

export default {
  title: 'Atoms|Typography/Text',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text'
      }
    }
  }
};
