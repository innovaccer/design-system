import * as React from 'react';
import { action } from '@/utils/action';
import Radio from '../Radio';

// CSF format story
export const all = () => {
  const size = 'tiny';

  const label = 'Radio';

  const disabled = false;

  const defaultChecked = false;

  const checked = undefined;

  const name = 'gender';

  const onChangeHandler = (event) => {
    return action(`onChange: ${event.target.value}: ${event.target.checked}`)();
  };

  return (
    <div>
      <Radio
        disabled={disabled}
        size={size}
        label={label}
        name={name}
        value={label}
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChangeHandler}
      />
    </div>
  );
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
