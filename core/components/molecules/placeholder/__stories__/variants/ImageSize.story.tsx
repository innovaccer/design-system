import * as React from 'react';
import Placeholder from '../../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage, { Size } from '@/components/atoms/placeholderImage';
import Text from '@/components/atoms/text';

export const imageSize = () => {
  const sizes: Size[] = ['small', 'medium', 'large'];

  return (
    <div style={{ display: 'flex' }}>
      {
        sizes.map((size, ind) => {
          return (
            <div key={ind} style={{ marginRight: '5%', width: '200px' }}>
              <Placeholder imageSize={size} withImage={true}>
                <PlaceholderParagraph length="large" />
              </Placeholder>
              <Text weight="strong">{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Molecules|Loaders/Placeholder/Variants',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph }
};
