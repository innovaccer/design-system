import * as React from 'react';
import { boolean } from '@storybook/addon-knobs';
import PlaceholderImage, { Size } from '../../PlaceholderImage';
import Text from '@/components/atoms/text';

export const size = () => {
  const round = boolean('round', false);
  const imageSizes: Size[] = ['small', 'medium', 'large'];
  const options = {
    round
  };

  return (
    <div style={{ display: 'flex' }}>
      {
        imageSizes.map((PlaceholderSize, ind) => {
          return (
            <div key={ind} style={{ marginRight: '3%' }}>
              <div style={{ height: '50px' }}>
                <PlaceholderImage imageSize={PlaceholderSize} {...options} />
              </div>
              <br />
              <Text weight="strong">{PlaceholderSize.charAt(0).toUpperCase() + PlaceholderSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Loaders/Placeholder/Image/Variants',
  component: PlaceholderImage,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderImage'
      }
    }
  }
};
