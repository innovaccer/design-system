import * as React from 'react';
import { Card } from '@/index';

// CSF format story
export const Flat = () => {
  return (
    <Card shadow="none">
      <div className="p-8" />
    </Card>
  );
};

export default {
  title: 'Components/Card/Type/Flat',
  component: Card,
};
