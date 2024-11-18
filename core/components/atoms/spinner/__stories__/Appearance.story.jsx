import * as React from 'react';
import { Spinner, Text } from '@/index';

// CSF format story
export const appearance = () => {
  const appearances = ['primary', 'secondary', 'white'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-8">
            <div className={appear === 'white' ? 'bg-dark' : 'bg-transparent'}>
              <Spinner appearance={appear} />
            </div>
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};
export default {
  title: 'Components/Progress Indicators/Spinner/Appearance',
  component: Spinner,
  parameters: {
    docs: {
      docPage: {
        title: 'Spinner',
      },
    },
  },
};
