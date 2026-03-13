import * as React from 'react';
import { Radio } from '@/index';

// CSF format story
export const defaultChecked = () => (
  <Radio defaultChecked={true} label={'Survey Outreach'} name={'Radio'} value={'Radio'} />
);

export default {
  title: 'Components/Radio/Default Checked',
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
