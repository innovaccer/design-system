import * as React from 'react';
import Radio from '../Radio';

// CSF format story
export const defaultRadio = () => (
  <Radio
    label={'Male'}
    name={'Radio'}
    value={'Radio'}
  />
);

export default {
  title: 'Components/Radio/Default Radio',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
