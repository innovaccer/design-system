import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Backdrop from '../Backdrop';

export const all = () => {
  const open = boolean('open', true);

  const options = {
    open
  };

  return (
    <Backdrop {...options} />
  );
};

export default {
  title: 'Atoms|Backdrop',
  component: Backdrop,
  parameters: {
    docs: {
      docPage: {
        noStory: true,
      }
    }
  }
};
