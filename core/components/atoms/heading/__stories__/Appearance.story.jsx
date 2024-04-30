import * as React from 'react';
import { Heading, Text } from '@/index';

// CSF format story
export const appearance = () => {
  const appearances = ['default', 'subtle', 'disabled', 'white'];
  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="d-flex flex-column mr-7">
            <Heading key={ind} className={appear === 'white' ? 'bg-dark' : 'bg-transparent'} appearance={appear}>
              Heading
            </Heading>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Typography/Heading/Appearance',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading',
      },
    },
  },
};
