import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Caption from '../index';

// CSF format story
export const all = () => {
  const error = boolean('error', false);
  const children = text('children', 'Caption');
  const options = {
    error,
  };

  return (
    <Caption {...options}>
      {children}
    </Caption>
  );
};

export default {
  title: 'Atoms|Typography/Caption',
  component: Caption,
  parameters: {
    docs: {
      docPage: {
        title: 'Caption'
      }
    }
  }
};
