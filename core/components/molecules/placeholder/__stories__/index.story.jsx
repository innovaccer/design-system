import * as React from 'react';
import { Placeholder, PlaceholderParagraph, PlaceholderImage } from '@/index';

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
  title: 'Components/Progress Indicators/Placeholder/All',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph },
};
