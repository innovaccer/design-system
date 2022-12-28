import * as React from 'react';
import Text from '../../index';

// CSF format story
export const appearance = () => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled', 'success', 'link'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        const backgroundClass = appear === 'white' ? 'bg-dark mr-6' : 'bg-transparent mr-6';

        return (
          <div key={ind} className={backgroundClass}>
            <Text appearance={appear}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Text/Variants/Appearance',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};
