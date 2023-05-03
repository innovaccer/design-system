import * as React from 'react';
import PlaceholderImage from '../PlaceholderImage';

export const all = () => {
  const round = false;
  const size = 'small';

  const options = {
    round,
    size,
  };

  return <PlaceholderImage {...options} />;
};

export default {
  title: 'Components/ProgressIndicators/Loaders/Placeholder/Image/All',
  component: PlaceholderImage,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderImage',
      },
    },
  },
};
