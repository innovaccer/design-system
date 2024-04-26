import * as React from 'react';
import { ProgressBar, Text } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['small', 'regular'];
  return (
    <div className="w-75">
      {sizes.map((ProgressBarSize, ind) => {
        return (
          <div key={ind} className="mb-7">
            <ProgressBar size={ProgressBarSize} value={30} />
            <br />
            <Text weight="strong">{ProgressBarSize.charAt(0).toUpperCase() + ProgressBarSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Progress Indicators/ProgressBar/Size',
  component: ProgressBar,
  parameters: {
    docs: {
      docPage: {
        title: 'ProgressBar',
      },
    },
  },
};
