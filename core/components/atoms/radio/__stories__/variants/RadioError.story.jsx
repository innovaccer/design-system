import * as React from 'react';
import { Radio } from '@/index';

// CSF format story
export const error = () => (
  <Radio aria-label="Error label" label={'Error label'} name={'Radio'} value={'Radio'} error={true} />
);

export default {
  title: 'Components/Radio/Variants/Error',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
