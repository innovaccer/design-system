import * as React from 'react';
import { Text, PlaceholderParagraph } from '@/index';

export const size = () => {
  const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  return (
    <div>
      {sizes.map((s, ind) => {
        return (
          <div key={ind} className="mb-7">
            <PlaceholderParagraph size={s} />
            <Text weight="strong">{s}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Loaders/Placeholder/Paragraph/Size',
  component: PlaceholderParagraph,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderParagraph',
      },
    },
  },
};
