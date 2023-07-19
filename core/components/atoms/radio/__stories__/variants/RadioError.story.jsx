import * as React from 'react';
import { Radio } from '@/index';

// CSF format story
export const error = () => <Radio label={'Error label'} name={'Radio'} value={'Radio'} error={true} />;

export default {
  title: 'Selection/Radio/Variants/Error',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
