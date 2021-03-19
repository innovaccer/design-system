import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Caption from '../index';

// CSF format story
export const all = () => {
  const error = boolean('error', false);
  const hide = boolean('hide', false);
  const withInput = boolean('with input', false);
  const children = text('children', 'Caption');
  const options = {
    error,
    hide,
    withInput
  };

  return (
    <Caption {...options} >
      {children}
    </Caption>
  );
};

export default {
  title: 'Components/Caption',
  component: Caption,
  parameters: {
    docs: {
      docPage: {
        title: 'Caption'
      }
    }
  }
};
