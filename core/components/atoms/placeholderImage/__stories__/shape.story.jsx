import * as React from 'react';
import { Text, PlaceholderImage, Placeholder } from '@/index';

export const shape = () => {
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
  title: 'Components/Progress Indicators/Placeholder/Image/Shape',
  component: Placeholder,
  subcomponents: { PlaceholderImage },
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderImage',
      },
    },
  },
};
