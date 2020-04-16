import * as React from 'react';
import { select, text, optionsKnob, number } from '@storybook/addon-knobs';
import Legend from '../Legend';

// CSF format story
export const all = () => {
  const icon = text('icon', 'fiber_manual_record');

  const label = text('label', 'Legend');

  const iconAppearance = text('Icon Appearance', 'inverse');

  const labelAppearance = select(
    'Label Appearance',
    ['default', 'white', 'destructive', 'subtle', 'disabled'],
    undefined
  );

  const labelWeight = optionsKnob('weight', { strong: 'strong', medium: 'medium' }, undefined, {
    display: 'inline-radio'
  });

  const iconType = select(
    'Icon Type',
    ['filled', 'outline', 'rounded', 'sharp'],
    undefined
  );

  const iconSize = number('iconSize', 14);

  const options = {
    icon,
    label,
    iconAppearance,
    labelAppearance,
    labelWeight,
    iconSize,
    iconType,
  };

  return (
    <div style={{ background: labelAppearance === 'white' ? 'black' : 'transparent' }}>
      <Legend
        {...options}
      />
    </div>
  );
};

export default {
  title: 'Atoms|Legend',
  component: Legend
};
