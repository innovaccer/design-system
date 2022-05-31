import * as React from 'react';
import Caption from '../index';

// CSF format story
export const all = () => {
  const error = false;
  const hide = false;
  const withInput = false;
  const children = 'Caption';
  const options = {
    error,
    hide,
    withInput,
  };

  return <Caption {...options}>{children}</Caption>;
};

export default {
  title: 'Components/Caption/All',
  component: Caption,
  parameters: {
    docs: {
      docPage: {
        title: 'Caption',
      },
    },
  },
};
