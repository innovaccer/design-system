import * as React from 'react';
import { Pills } from '@/index';

// CSF format story
export const all = () => {
  return <Pills aria-label="Unread notifications">10</Pills>;
};

export default {
  title: 'Components/Pills/All',
  component: Pills,
};
