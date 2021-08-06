import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Placeholder from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage from '@/components/atoms/placeholderImage';

export const all = () => {
  const withImage = boolean('withImage', false);
  const round = boolean('round', false);
  const imageSize = select('imageSize', ['small', 'medium', 'large'], undefined);

  const options = {
    withImage,
    round,
    imageSize,
  };

  return (
    <Placeholder {...options}>
      <PlaceholderParagraph length="small" />
      <PlaceholderParagraph length="medium" />
    </Placeholder>
  );
};

export default {
  title: 'Components/Loaders/Placeholder/All',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph },
};
