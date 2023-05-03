import * as React from 'react';
import PlaceholderParagraph from '../PlaceholderParagraph';

export const all = () => {
  const length = 'medium';
  const size = 'l';

  return <PlaceholderParagraph size={size} length={length} />;
};

export default {
  title: 'Indicators/Loaders/Placeholder/Paragraph/All',
  component: PlaceholderParagraph,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderParagraph',
      },
    },
  },
};
