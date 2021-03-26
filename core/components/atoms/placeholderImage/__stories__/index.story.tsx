import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import PlaceholderImage from '../PlaceholderImage';

export const all = () => {
  const round = boolean('round', false);
  const size = select(
    'size',
    ['small', 'medium', 'large'],
    'small'
  );

  const options = {
    round, size
  };

  return (
    <PlaceholderImage {...options} />
  );
};

export default {
  title: 'Components/Loaders/Placeholder/Image/All',
  component: PlaceholderImage,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderImage'
      }
    }
  }
};
