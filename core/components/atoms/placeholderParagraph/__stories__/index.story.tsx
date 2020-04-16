import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import PlaceholderParagraph from '../PlaceholderParagraph';

export const all = () => {
  const length = select(
    'length',
    ['small', 'medium', 'large'],
    'small'
  );

  const options = {
    length
  };

  return (
    <PlaceholderParagraph {...options} />
  );
};

export default {
  title: 'Atoms|Loaders/Placeholder/Paragraph',
  component: PlaceholderParagraph,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderParagraph'
      }
    }
  }
};
