import * as React from 'react';
import Text, { TextAppearance } from '../../index';

// CSF format story
export const appearance = () => {
  const appearances: TextAppearance[] = ['default', 'white', 'destructive', 'subtle', 'disabled', 'success', 'link'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} style={{ background: appear === 'white' ? 'black' : 'transparent' }} className="mr-6">
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
