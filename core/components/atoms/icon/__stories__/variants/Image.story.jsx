import * as React from 'react';
import { Icon } from '@/index';

export const image = () => {
  return (
    <Icon size={50}>
      <img alt="Innovaccer logo" src="https://design.innovaccer.com/images/withoutType.png" width="50" height="50" />
    </Icon>
  );
};

export default {
  title: 'Components/Icon/Variants/Image',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        title: 'Icon',
      },
    },
  },
};
