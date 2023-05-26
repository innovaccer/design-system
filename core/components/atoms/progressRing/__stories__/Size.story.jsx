import * as React from 'react';
import { ProgressRing, Text } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['small', 'regular'];
  return (
    <div className="d-flex">
      {sizes.map((ProgressRingSize, ind) => {
        return (
          <div key={ind} className="mr-10">
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
  title: 'Components/ProgressRing/Size',
  component: ProgressRing,
  parameters: {
    docs: {
      docPage: {
        title: 'ProgressRing',
      },
    },
  },
};
