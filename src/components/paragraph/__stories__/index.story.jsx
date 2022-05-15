import * as React from 'react';
import { Paragraph } from '@/index';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  parameters: {
    docs: {
      docPage: {
        title: 'Paragraph',
      },
    },
  },
};

export const Default = () => {

  return (
    <Paragraph>Paragraph component have different variants</Paragraph>
  );
};

export const Appearances = () => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled'];

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className={`mr-6 ${appear === 'white'? 'bg-dark' : 'bg-light'}`}>
            <Paragraph appearance={appear}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Paragraph>
          </div>
        );
      })}
    </div>
  );
}
