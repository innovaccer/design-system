import * as React from 'react';
import Heading from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];

  return (
    <div className="Row">
      {sizes.map((HeadingSize, ind) => {
        return (
          <div key={ind} className="mr-7">
            <div className="h-50">
              <Heading size={HeadingSize}>Heading</Heading>
            </div>
            <br />
            <Text weight="strong">{HeadingSize}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Heading/Variants/Size',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading',
      },
    },
  },
};
