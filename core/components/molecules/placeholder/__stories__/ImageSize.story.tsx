import * as React from 'react';
import Placeholder, { } from '../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import { Size } from '@/components/atoms/placeholderImage';
import Text from '@/components/atoms/text';

export const imageSize = () => {
  const sizes: Size[] = ['small', 'medium', 'large'];

  return (
    <div style={{ display: 'flex' }}>
      {
        sizes.map((size, ind) => {
          return (
            <div key={ind} style={{ display: 'flex', marginRight: '5%' }}>
              <Placeholder imageSize={size} withImage={true}>
                <PlaceholderParagraph length="large" />
                <br />
                <Text weight="strong">{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
              </Placeholder>
            </div>
          );
        })
      }
    </div>
  );
};

export default { title: 'Loaders/Placeholder' };
