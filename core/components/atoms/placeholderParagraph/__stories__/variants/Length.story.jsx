import * as React from 'react';
import PlaceholderParagraph from '../../PlaceholderParagraph';
import Text from '@/components/atoms/text';

export const length = () => {
  const lengths = ['small', 'medium', 'large'];

  return (
    <div>
      {lengths.map((len, ind) => {
        return (
          <div key={ind} className="mb-7">
            <PlaceholderParagraph length={len} />
            <Text weight="strong">{len.charAt(0).toUpperCase() + len.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/ProgressIndicators/Loaders/Placeholder/Paragraph/Variants/Length',
  component: PlaceholderParagraph,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderParagraph',
      },
    },
  },
};
