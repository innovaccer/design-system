import * as React from 'react';
import { Checkbox } from '@/index';

export const defaultChecked = () => (
  <Checkbox aria-label="Emergency contact" label="Emergency contact" defaultChecked={true} />
);

export default {
  title: 'Components/Checkbox/Default Checked',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
