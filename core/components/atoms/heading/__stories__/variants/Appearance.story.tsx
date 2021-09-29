import * as React from 'react';
import Heading from '../../index';
import Text from '@/components/atoms/text';
import { HeadingAppearance } from '../../../../../commonTypes';

// CSF format story
export const appearance = () => {
  const appearances: HeadingAppearance[] = ['default', 'subtle', 'disabled', 'white'];
  return (
    <div className="Row">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-7">
            <div style={{ background: appear === 'white' ? 'black' : 'transparent' }}>
              <Heading appearance={appear}>Heading</Heading>
            </div>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Heading/Variants/Appearance',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading',
      },
    },
  },
};
