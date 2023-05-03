import * as React from 'react';
import Radio from '../Radio';

// CSF format story
export const defaultRadio = () => <Radio label={'Survey Outreach'} name={'Radio'} value={'Radio'} />;

export default {
  title: 'Selection/Radio/Default Radio',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
