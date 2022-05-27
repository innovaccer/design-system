import * as React from 'react';
import { Heading, Text } from '@/index';

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      docPage: {
        title: 'Heading',
      },
    },
  },
};

export const Default = () => {
  return <Heading>Heading</Heading>;
};

export const Appearances = () => {
  const appearances = ['default', 'subtle', 'disabled', 'white'];

  return (
    <div className="Row">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-7">
            <div className={appear === 'white' ? 'bg-dark' : 'bg-light'}>
              <Heading appearance={appear}>Heading</Heading>
            </div>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}

export const Size = () => {
  const sizes = ['x-small', 'small', 'medium', 'large', 'x-large'];

  return (
    <div className="Row">
      {sizes.map((HeadingSize, ind) => {
        return (
          <div key={ind} className="mr-7">
            <div className="h-50">
              <Heading size={HeadingSize}>Heading</Heading>
            </div>
            <br />
            <Text weight="strong">{HeadingSize}</Text>
          </div>
        );
      })}
    </div>
  );
};
