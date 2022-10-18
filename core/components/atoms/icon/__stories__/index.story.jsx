import * as React from 'react';
import { action } from '@/utils/action';
import Icon from '../index';

// CSF format story
export const all = () => {
  const appearance = 'white';
  const iconType = 'sharp';
  const size = 50;
  const name = 'info';

  return (
    <div className={appearance === 'white' ? 'bg-dark' : 'bg-transparent'}>
      <Icon appearance={appearance} type={iconType} size={size} name={name} onClick={action('click-event')} />
    </div>
  );
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
