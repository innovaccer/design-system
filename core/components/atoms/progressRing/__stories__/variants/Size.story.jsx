import * as React from 'react';
import ProgressRing from '../../ProgressRing';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const sizes = ['small', 'regular'];
  return (
    <div className="d-flex">
      {sizes.map((ProgressRingSize, ind) => {
        return (
          <div key={ind} className="mr-6">
            <div className="h-50">
              <ProgressRing size={ProgressRingSize} value={30} />
            </div>
            <Text weight="strong">{ProgressRingSize.charAt(0).toUpperCase() + ProgressRingSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Indicators/ProgressRing/Variants/Size',
  component: ProgressRing,
  parameters: {
    docs: {
      docPage: {
        title: 'ProgressRing',
      },
    },
  },
};
