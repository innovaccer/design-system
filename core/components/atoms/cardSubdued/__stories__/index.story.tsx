import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import { CardSubdued } from '@/index';

// CSF format story
export const all = () => {
  const border = select(
    'border',
    ['top', 'left', 'right', 'bottom'],
    undefined
  );

  return (
    <CardSubdued border={border} className="w-25 px-5 py-5" style={{ height: '150px' }}>
      <span>Subdued Card</span>
    </CardSubdued>
  );
};

export default {
  title: 'Components/CardSubdued/All',
  component: CardSubdued
};
