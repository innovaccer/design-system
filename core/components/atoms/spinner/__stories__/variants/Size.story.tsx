import * as React from 'react';
import Spinner, { Size } from '../../Spinner';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {

  const sizes: Size[] = ['small', 'medium', 'large'];

  const style = {
    display: 'flex',
  };

  const innerStyle = {
    height: '50px',
  };

  return (
    <div style={style}>
      {
        sizes.map((SpinnerSize, ind) => {
          return (
            <div key={ind} style={{ marginRight: '4%' }}>
              <div style={innerStyle}>
                <Spinner size={SpinnerSize} />
              </div>
              <Text weight="strong">{SpinnerSize.charAt(0).toUpperCase() + SpinnerSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Atoms|Loaders/Spinner/Variants',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        title: 'Spinner'
      }
    }
  }
};
