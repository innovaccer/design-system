import * as React from 'react';
import Spinner, { Appearance } from '../../Spinner';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {

  const appearances: Appearance[] = ['primary', 'secondary', 'white'];
  return (
    <div className="d-flex">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} className="mr-8">
              <div style={{ background: appear === 'white' ? 'black' : 'transparent' }}>
                <Spinner appearance={appear} />
              </div>
              <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Components/Loaders/Spinner/Variants/Appearance',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        title: 'Spinner'
      }
    }
  }
};
