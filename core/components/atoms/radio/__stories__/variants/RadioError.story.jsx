import * as React from 'react';
import { Radio } from '@/index';

// CSF format story
export const error = () => <Radio label={'Error label'} name={'Radio'} value={'Radio'} error={true} />;

export default {
  title: 'Components/Radio/Variants/Error',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        a11yPropsTable: 'all',
        props: { exclude: ['key'] },
      },
    },
  },
};
