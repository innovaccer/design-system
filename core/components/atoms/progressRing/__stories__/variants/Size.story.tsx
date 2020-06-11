import * as React from 'react';
import ProgressRing, { Size } from '../../ProgressRing';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {

  const sizes: Size[] = ['small', 'regular'];

  const style = {
    display: 'flex',
  };

  const innerStyle = {
    height: '50px',
  };

  return (
    <div style={style}>
      {
        sizes.map((ProgressRingSize, ind) => {
          return (
            <div key={ind} style={{ marginRight: '4%' }}>
              <div style={innerStyle}>
                <ProgressRing size={ProgressRingSize} value={30}/>
              </div>
              <Text weight="strong">{ProgressRingSize.charAt(0).toUpperCase() + ProgressRingSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Atoms|ProgressRing/Variants',
  component: ProgressRing,
  parameters: {
    docs: {
      docPage: {
        title: 'ProgressRing'
      }
    }
  }
};
