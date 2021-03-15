import * as React from 'react';
import PlaceholderImage from '../../PlaceholderImage';
import Text from '@/components/atoms/text';

export const round = () => {
  const size = 'medium';

  return (
    <div className="d-flex">
      <div className="mr-6">
        <PlaceholderImage size={size} round={false} />
        <br />
        <Text weight="strong">Square</Text>
      </div>
      <div>
        <PlaceholderImage size={size} round={true} />
        <br />
        <Text weight="strong">Round</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Loaders/Placeholder/Image/Variants',
  component: PlaceholderImage,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderImage'
      }
    }
  }
};
