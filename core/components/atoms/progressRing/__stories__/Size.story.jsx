import * as React from 'react';
import { ProgressRing, Text } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['small', 'regular', 'large'];
  return (
    <div className="d-flex">
      {sizes.map((ProgressRingSize, ind) => {
        return (
          <div key={ind} className="mr-10 d-flex flex-column align-items-center">
            <ProgressRing size={ProgressRingSize} value={30} />
            <br />
            <Text weight="strong">{ProgressRingSize.charAt(0).toUpperCase() + ProgressRingSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Progress Indicators/ProgressRing/Size',
  component: ProgressRing,
  parameters: {
    docs: {
      docPage: {
        title: 'ProgressRing',
      },
    },
  },
};
