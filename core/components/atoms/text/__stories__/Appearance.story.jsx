import * as React from 'react';
import { Text } from '@/index';

// CSF format story
export const appearance = () => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled', 'success', 'link'];
  return (
    <div className="d-flex w-75 justify-content-between">
      {appearances.map((appear, ind) => {
        const backgroundClass = appear === 'white' ? 'bg-dark mr-6' : '';

        return (
          <Text key={ind} className={backgroundClass} appearance={appear}>
            {appear.charAt(0).toUpperCase() + appear.slice(1)}
          </Text>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Typography/Text/Appearance',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
