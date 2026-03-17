import * as React from 'react';
import { Pills } from '@/index';

export const subtleAlert = () => {
  return (
    <Pills appearance="alert" subtle={true} aria-label="Subtle alert count">
      10
    </Pills>
  );
};

export default {
  title: 'Components/Pills/Subtle Alert',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
      },
    },
  },
};
