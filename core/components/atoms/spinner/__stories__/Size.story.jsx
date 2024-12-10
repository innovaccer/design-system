import * as React from 'react';
import { Spinner, Text } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['xsmall', 'small', 'medium', 'large'];
  return (
    <div className="d-flex">
      {sizes.map((SpinnerSize, ind) => {
        return (
          <div key={ind} className="mr-8 d-flex flex-column align-items-center">
            <div className="h-75">
              <Spinner size={SpinnerSize} />
            </div>
            <Text weight="strong">{SpinnerSize.charAt(0).toUpperCase() + SpinnerSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Progress Indicators/Spinner/Size',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        title: 'Spinner',
      },
    },
  },
};
