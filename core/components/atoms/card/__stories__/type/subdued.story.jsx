import * as React from 'react';
import { Card, CardSubdued } from '@/index';

// CSF format story
export const Subdued = () => {
  return (
    <CardSubdued>
      <div className="p-8" />
    </CardSubdued>
  );
};

export default {
  title: 'Components/Card/Type/Subdued',
  component: Card,
  subcomponents: { CardSubdued },
  parameters: {
    docs: {
      docPage: {
        title: 'CardSubdued',
        description: 'A component to highlight section of a card.',
      },
    },
  },
};
