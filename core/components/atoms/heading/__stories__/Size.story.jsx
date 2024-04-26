import * as React from 'react';
import { Heading, Text } from '@/index';
import './style.css';

// CSF format story
export const size = () => {
  const sizes = ['s', 'm', 'l', 'xl', 'xxl'];

  return (
    /*
  // style.css
    .bottom-0 {
      bottom: 0
    }
   */
    <div className="d-flex align-items-center position-relative">
      {sizes.map((HeadingSize, ind) => {
        return (
          <div key={ind} className="mr-7 mb-5">
            <Heading size={HeadingSize}>Heading</Heading>
            <br />
            <Text weight="strong" className="bottom-0 position-absolute">
              {HeadingSize}
            </Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Typography/Heading/Size',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading',
      },
    },
  },
};
