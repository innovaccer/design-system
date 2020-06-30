import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Backdrop from '../Backdrop';
import { Heading } from '@/index';

export const all = () => {
  const open = boolean('open', true);

  const options = {
    open
  };

  return (
    <div style={{}}>
      <Heading>Page background</Heading>
      <Backdrop {...options} />
    </div>
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
