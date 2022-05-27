import * as React from 'react';
import { Subheading, Text } from '@/index';

export default {
  title: 'Typography/Subheading',
  component: Subheading,
  parameters: {
    docs: {
      docPage: {
        title: 'Subheading',
      },
    },
  },
};

export const Default = () => {

  return (
    <div>
      <Subheading>Subheading</Subheading>
    </div>
  );
};

export const Appearances = () => {
  const appearances = ['default', 'subtle', 'disabled', 'white'];

  return (
    <div className="Row">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-7">
            <div className={appear === 'white' ? 'bg-dark' : 'bg-light'}>
              <Subheading appearance={appear}>Subheading</Subheading>
            </div>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}
