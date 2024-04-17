import * as React from 'react';
import { Card } from '@/index';

// CSF format story
export const Shadow = () => {
  const shadows = ['none', 'shadow10', 'shadow20', 'shadow30'];
  return (
    <div className="d-flex justify-content-between w-75">
      {shadows.map((shadow) => {
        return (
          <Card shadow={shadow} key={shadow}>
            <div className="p-8">{shadow}</div>
          </Card>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Card/Shadow',
  component: Card,
};
