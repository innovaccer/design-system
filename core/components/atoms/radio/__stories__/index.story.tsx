import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Radio from '../Radio';

// CSF format story
export const all = () => {
  const size = select(
    'size',
    ['regular', 'tiny'],
    undefined
  );

  const label = text(
    'label',
    'Radio'
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const defaultChecked = boolean(
    'defaultChecked',
    false
  );

  const checked = boolean(
    'checked',
    undefined
  );

  const name = 'gender';

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
  title: 'Atoms|Radio',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
