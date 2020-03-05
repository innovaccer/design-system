import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Backdrop from './Backdrop';

export const all = () => {
  const open = boolean('open', false);

  const options = {
    open
  };

  return (
    <Backdrop {...options} />
  );
};

export default { title: 'Backdrop' };
