import * as React from 'react';
import { boolean, optionsKnob } from '@storybook/addon-knobs';
import { Text } from '@/index';

// CSF format story
export const all = () => {
  const weight = optionsKnob('weight', { strong: 'strong', medium: 'medium' }, undefined, {
    display: 'inline-radio',
  });
  const size = optionsKnob('size', { small: 'small', regular: 'regular', large: 'large' }, undefined, {
    display: 'inline-radio',
  });
  const small = boolean('small', false);
  const appearance = optionsKnob(
    'appearance',
    {
      default: 'default',
      white: 'white',
      destructive: 'destructive',
      subtle: 'subtle',
      disabled: 'disabled',
      success: 'success',
      link: 'link',
    },
    undefined,
    {
      display: 'inline-radio',
    }
  );

  const options = {
    size,
    weight,
    appearance,
    small,
  };

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Text {...options}>Text component have different varients, look for options in knobs tab.</Text>
    </div>
  );
};

export default {
  title: 'Components/Text/All',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
