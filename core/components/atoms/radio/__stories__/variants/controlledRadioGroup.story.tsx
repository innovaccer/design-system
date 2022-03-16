import * as React from 'react';
import { action } from '@/utils/action';
import Radio from '../../Radio';

// CSF format story
export const ControlledRadioGroup = () => {
  const [selected, setSelected] = React.useState('Option 2');

  const onChangeHandler = (event) => {
    setSelected(event.target.value);
    return action(`onChange: ${event.target.value}: ${event.target.checked}`)();
  };

  return (
    <div>
      <Radio
        label={'Option 1'}
        name={'options'}
        value={'Option 1'}
        checked={selected === 'Option 1'}
        onChange={onChangeHandler}
      />
      <Radio
        label={'Option 2'}
        name={'options'}
        value={'Option 2'}
        checked={selected === 'Option 2'}
        onChange={onChangeHandler}
      />
      <Radio
        label={'Option 3'}
        name={'options'}
        value={'Option 3'}
        checked={selected === 'Option 3'}
        onChange={onChangeHandler}
      />
    </div>
  );
};

const customCode = `() => {
  const [selected, setSelected] = React.useState('Option 2');

  const onChangeHandler = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <Radio
        label={'Option 1'}
        name={'options'}
        value={'Option 1'}
        checked={selected === 'Option 1'}
        onChange={onChangeHandler}
      />
      <Radio
        label={'Option 2'}
        name={'options'}
        value={'Option 2'}
        checked={selected === 'Option 2'}
        onChange={onChangeHandler}
      />
      <Radio
        label={'Option 3'}
        name={'options'}
        value={'Option 3'}
        checked={selected === 'Option 3'}
        onChange={onChangeHandler}
      />
    </div>
  );
};
`;
export default {
  title: 'Components/Radio/Variants/Controlled Radio Group',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: { exclude: ['key'] },
      },
    },
  },
};
