import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import { action } from '@storybook/addon-actions';
import Dialog from '../../Dialog';

const emitter = (type: any, options: any) => addons.getChannel().emit(type, options);

const updateKnob = (name: any, value: any) => (
  emitter('storybookjs/knobs/change', { name, value })
);

export const alert = () => {
  const open = boolean('open', true);

  const onClose = () => {
    updateKnob('open', false);
  };

  const options = {
    open,
    onClose,
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
    <Dialog secondaryButtonAppearance="alert" {...options} />
  );
};

export default { title: 'Dialog/SecondaryButton' };
