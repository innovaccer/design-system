import * as React from 'react';
import { PlaceholderParagraph, Placeholder } from '@/index';

export const all = () => {
  const length = 'medium';
  const size = 'l';

  return <PlaceholderParagraph size={size} length={length} />;
};

export default {
  title: 'Loaders/Placeholder/Paragraph/All',
  component: Placeholder,
  subcomponents: { PlaceholderParagraph },
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderParagraph',
      },
    },
  },
};
