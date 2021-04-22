import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Card from '../Card';

// CSF format story
export const all = () => {
  const shadow = select(
    'shadow',
    ['none', 'light'],
    undefined
  );

  const getChildren = (shadowType: any) => {
    switch (shadowType) {
      case 'light':
        return <span>Light Shadow</span>;
      default:
        return <span>No Shadow</span>;
    }
  };

  const children = getChildren(shadow);

  return (
    <div className="w-25" style={{ height: '150px' }}>
      <Card shadow={shadow} className="h-100 w-100" >
        {children}
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Card/All',
  component: Card
};
