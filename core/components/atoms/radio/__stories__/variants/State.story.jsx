import * as React from 'react';
import { Radio } from '@/index';

// CSF format story
export const state = () => {
  const name = 'state';

  return (
    <div className="d-flex w-25 justify-content-between">
      <Radio label={'Disabled'} name={name} value={'Disabled'} disabled={true} />
      <Radio label={'Enabled'} name={name} value={'Enabled'} disabled={false} />
    </div>
  );
};

export default {
  title: 'Components/Radio/Variants/State',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
