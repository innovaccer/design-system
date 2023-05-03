import * as React from 'react';
import Placeholder from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage from '@/components/atoms/placeholderImage';

export const all = () => {
  const withImage = false;
  const round = false;
  const imageSize = 'large';

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
  title: 'Indicators/Loaders/Placeholder/All',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph },
};
