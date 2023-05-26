import * as React from 'react';
import { Icon } from '@/index';

// CSF format story
export const all = () => {
  return <Icon size={50} name="place" />;
};
const customCode = `() => {
  return(
    <Icon size={50} name='place'/>
    );
}`;

export default {
  title: 'Components/Icon/All',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
