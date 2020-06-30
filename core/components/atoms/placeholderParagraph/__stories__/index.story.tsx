import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import PlaceholderParagraph from '../PlaceholderParagraph';

export const all = () => {
  const length = select(
    'length',
    ['small', 'medium', 'large'],
    undefined
  );

  const size = select(
    'size',
    ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'],
    undefined
  );

  return (
    <PlaceholderParagraph
      size={size}
      length={length}
    />
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
