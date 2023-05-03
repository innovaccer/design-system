import * as React from 'react';
import Radio from '../Radio';

// CSF format story
export const errorRadio = () => <Radio label={'Error label'} name={'Radio'} value={'Radio'} error={true} />;

export default {
  title: 'Selection/Radio/Error Radio',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
