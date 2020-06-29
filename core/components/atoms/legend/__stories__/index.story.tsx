import * as React from 'react';
import { select, text, optionsKnob, number } from '@storybook/addon-knobs';
import Legend from '../Legend';

// CSF format story
export const all = () => {
  const children = text('children', 'Legend');

  const iconAppearance = text('Icon Appearance', 'inverse');

  const labelAppearance = select(
    'Label Appearance',
    ['default', 'white', 'destructive', 'subtle', 'disabled'],
    undefined
  );

  const labelWeight = optionsKnob('weight', { strong: 'strong', medium: 'medium' }, undefined, {
    display: 'inline-radio'
  });

  const iconSize = number('iconSize', 14);

  const options = {
    iconAppearance,
    labelAppearance,
    labelWeight,
    iconSize,
  };

  return (
    <div style={{ background: labelAppearance === 'white' ? 'black' : 'transparent' }}>
      <Legend
        {...options}
      >
        {children}
      </Legend>
    </div>
  );
};

export default {
  title: 'Atoms|Legend',
  component: Legend
};
