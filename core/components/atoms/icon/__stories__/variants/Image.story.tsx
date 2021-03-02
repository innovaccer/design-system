import * as React from 'react';
import { Icon } from '@/index';

export const image = () => {
  return (
    <Icon
      size={50}
    >
      <img
        src="https://innovaccer.com/static/image/site-logo/innovaccer-logo-black.svg"
        width="150"
        height="150"
      />
    </Icon>
  );
};

export default {
  title: 'Atoms|Icon/Variants',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        title: 'Icon'
      }
    }
  }
};
