import * as React from 'react';
import { action } from '@storybook/addon-actions';
import Radio from '../../Radio';

// CSF format story
export const UncontrolledRadioGroup = () => {

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    return action(`onChange: ${event.target.value}: ${event.target.checked}`)();
  };

  return (
    <div>
      <Radio
        label={'Option 1'}
        name={'options'}
        value={'Option 1'}
        onChange={onChangeHandler}
      />
      <Radio
        label={'Option 2'}
        name={'options'}
        value={'Option 2'}
        defaultChecked={true}
        onChange={onChangeHandler}
      />
      <Radio
        label={'Option 3'}
        name={'options'}
        value={'Option 3'}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default {
  title: 'Components/Radio/Variants',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
