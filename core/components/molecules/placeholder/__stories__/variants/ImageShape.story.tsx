import * as React from 'react';
import Placeholder from '../../Placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import PlaceholderImage from '@/components/atoms/placeholderImage';
import Text from '@/components/atoms/text';

export const imageShape = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '200px', marginRight: '5%' }}>
        <Placeholder withImage={true} round={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">Round</Text>
      </div>
      <div style={{ width: '200px' }}>
        <Placeholder withImage={true}>
          <PlaceholderParagraph length="large" />
        </Placeholder>
        <Text weight="strong">Square</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Molecules|Loaders/Placeholder/Variants',
  component: Placeholder,
  subcomponents: { PlaceholderImage, PlaceholderParagraph }
};
