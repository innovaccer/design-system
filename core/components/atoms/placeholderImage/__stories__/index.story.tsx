import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import PlaceholderImage from '../PlaceholderImage';

export const all = () => {
  const round = boolean('round', false);
  const imageSize = select(
    'imageSize',
    ['small', 'medium', 'large'],
    'small'
  );

  const options = {
    round, imageSize
  };

  return (
    <PlaceholderImage {...options} />
  );
};

export default {
  title: 'Atoms|Loaders/Placeholder/Image',
  component: PlaceholderImage,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderImage'
      }
    }
  }
};
