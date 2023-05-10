import * as React from 'react';
import { Card } from '@/index';

// CSF format story
export const defaultCard = () => {
  return (
    <Card>
      <div className="p-8" />
    </Card>
  );
};

export default {
  title: 'Components/Card/Type/Default Card',
  component: Card,
};
