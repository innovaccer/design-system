import * as React from 'react';
import Placeholder from '../../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage from '@/components/atoms/placeholderImage';
import Text from '@/components/atoms/text';

export const imageSize = () => {
  const sizes = ['small', 'medium', 'large'];

  return (
    <div className="d-flex">
      {sizes.map((size, ind) => {
        return (
          <div key={ind} className="w-25 mr-8">
            <Placeholder imageSize={size} withImage={true}>
              <PlaceholderParagraph length="large" />
            </Placeholder>
            <Text weight="strong">{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Loaders/Placeholder/Variants/Image Size',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph },
};
