import * as React from 'react';
import Radio from '../index';

export const radioGroup = () => (
  <div>
    <Radio size={'regular'} label={'High'} name={'Priority'} value={'High'} defaultChecked={true} />
    <Radio size={'regular'} label={'Medium'} name={'Priority'} value={'Medium'} />
    <Radio size={'regular'} label={'Low'} name={'Priority'} value={'Low'} />
  </div>
);

export default {
  title: 'Components/Radio/Radio Group',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
