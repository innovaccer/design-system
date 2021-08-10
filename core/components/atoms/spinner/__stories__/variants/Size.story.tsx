import * as React from 'react';
import Spinner, { Size } from '../../Spinner';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const sizes: Size[] = ['small', 'medium', 'large'];
  return (
    <div className="d-flex">
      {sizes.map((SpinnerSize, ind) => {
        return (
          <div key={ind} className="mr-8">
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
  title: 'Components/Loaders/Spinner/Variants/Size',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        title: 'Spinner',
      },
    },
  },
};
