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
  title: 'Components/Card/Default Card',
  component: Card,
};
