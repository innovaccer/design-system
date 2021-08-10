import * as React from 'react';
import Placeholder from '../../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage from '@/components/atoms/placeholderImage';
import Text from '@/components/atoms/text';

export const imageShape = () => {
  return (
    <div className="d-flex">
      <div className="w-25 mr-8">
        <Placeholder withImage={true} round={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">Round</Text>
      </div>
      <div className="w-25">
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">Square</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Loaders/Placeholder/Variants/Image Shape',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph },
};
