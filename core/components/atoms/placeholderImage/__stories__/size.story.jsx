import * as React from 'react';
import { Text, PlaceholderImage, Placeholder } from '@/index';

export const size = () => {
  const round = false;
  const sizes = ['small', 'medium', 'large'];
  const options = {
    round,
  };

  return (
    <div className="d-flex">
      {sizes.map((PlaceholderSize, ind) => {
        return (
          <div key={ind} className="mr-7">
            <Text weight="strong">{PlaceholderSize.charAt(0).toUpperCase() + PlaceholderSize.slice(1)}</Text>
            <PlaceholderImage size={PlaceholderSize} {...options} className="mt-5" />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Progress Indicators/Placeholder/Image/Size',
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
