import * as React from 'react';
import { Radio, Text } from '@/index';

export const radioGroup = () => (
  <>
    <Text weight="strong">Priority</Text>
    <div className="mt-4">
      <Radio size={'regular'} label={'High'} name={'Priority'} value={'High'} defaultChecked={true} />
      <Radio size={'regular'} label={'Medium'} name={'Priority'} value={'Medium'} />
      <Radio size={'regular'} label={'Low'} name={'Priority'} value={'Low'} />
    </div>
  </>
);

export default {
  title: 'Selection/Radio/Radio Group',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
