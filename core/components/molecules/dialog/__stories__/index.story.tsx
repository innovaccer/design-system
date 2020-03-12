import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import { action } from '@storybook/addon-actions';
import Dialog from '../Dialog';

const emitter = (type: any, options: any) => addons.getChannel().emit(type, options);

const updateKnob = (name: any, value: any) => (
  emitter('storybookjs/knobs/change', { name, value })
);

export const all = () => {
  const open = boolean('open', false);
  const dimension = select(
    'dimension',
    ['small', 'medium', 'large'],
    'small'
  );

  const primaryButtonAppearance = select(
    'primaryButtonAppearance',
    ['basic', 'primary', 'success', 'alert', 'transparent'],
    'primary'
  );

  const secondaryButtonAppearance = select(
    'secondaryButtonAppearance',
    ['basic', 'primary', 'success', 'alert', 'transparent'],
    'basic'
  );

  const onClose = () => {
    updateKnob('open', false);
  };

  const options = {
    open,
    onClose,
    dimension,
    primaryButtonAppearance,
    secondaryButtonAppearance,
    icon: 'pan_tool',
    heading: 'Heading',
    title: 'Description Title',
    description: 'Adding a subheading clearly indicates the hierarchy of the information.',
    primaryButtonLabel: 'Primary',
    primaryButtonCallback: action('primary click'),
    secondaryButtonLabel: 'Basic',
    secondaryButtonCallback: action('basic click')
  };

  return (
      <Dialog {...options} />
  );
};

export default { title: 'Dialog' };
