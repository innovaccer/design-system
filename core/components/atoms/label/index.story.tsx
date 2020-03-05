import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Label from './index';

// CSF format story
export const label = () => {
  const disabled = boolean('disabled', false);
  const options = {
    disabled,
  };

  return (
    <Label {...options}>
      Label
    </Label>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Typography' };
