import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Placeholder, {} from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';

export const all = () => {
  const withImage = boolean('withImage', false);
  const round = boolean('round', false);
  const imageSize = select(
    'imageSize',
    ['small', 'medium', 'large'],
    'small'
  );

  const options = {
    withImage, round, imageSize
  };

  return (
    <Placeholder {...options}>
      <PlaceholderParagraph length="small" />
      <PlaceholderParagraph length="medium" />
    </Placeholder>
  );
};

export default { title: 'Loaders/Placeholder' };
