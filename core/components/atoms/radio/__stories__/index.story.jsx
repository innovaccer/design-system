import * as React from 'react';
import { action } from '@/utils/action';
import { Radio } from '@/index';

// CSF format story
export const all = () => {
  const label = 'Radio';

  const name = 'gender';

  const onChangeHandler = (event) => {
    return action(`onChange: ${event.target.value}: ${event.target.checked}`)();
  };

  return <Radio label={label} name={name} value={label} onChange={onChangeHandler} />;
};

export default {
  title: 'Components/Radio/All',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
