import * as React from 'react';
import { Combobox } from '@/index';

// CSF format story
export const all = () => {
  return (
    <div className="d-flex align-items-center">
      <Combobox />
    </div>
  );
};

export default {
  title: 'Components/Combobox/All',
  component: Combobox,
};
