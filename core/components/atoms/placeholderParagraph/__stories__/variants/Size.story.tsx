import * as React from 'react';
import PlaceholderParagraph, { Size } from '../../PlaceholderParagraph';
import Text from '@/components/atoms/text';

export const size = () => {
  const sizes: Size[] = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  return (
    <div>
      {
        sizes.map((s, ind) => {
          return (
            <div key={ind} className="mb-7">
              <PlaceholderParagraph size={s} />
              <Text weight="strong">{s}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Components/Loaders/Placeholder/Paragraph/Variants',
  component: PlaceholderParagraph,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderParagraph'
      }
    }
  }
};
