import * as React from 'react';
import Dropdown from '../../Dropdown';
import { action } from '@/utils/action';
import Text from '@/components/atoms/text';
import { disabledStoryOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const disabledOption = () => {
  const onClose = (options) => {
    return action(`dropdown closed with selected values: ${options}`)();
  };

  const onChangeHandler = (selectedValues) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  return (
    <div className="d-flex">
      <div className="mr-9 w-25">
        <Text weight="strong">{'With Checkbox'}</Text>
        <br />
        <br />
        <Dropdown
          withCheckbox={true}
          withSelectAll={false}
          options={disabledStoryOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'Without Checkbox'}</Text>
        <br />
        <br />
        <Dropdown options={disabledStoryOptions} placeholder={'Select'} onChange={onChangeHandler} onClose={onClose} />
      </div>
    </div>
  );
};

const customCode = `() => {
  const disabledStoryOptions = [];
  for (let i = 1; i <= 10; i++) {
    disabledStoryOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      disabled: i===2
    });
  }

  const onClose = (options) => {
    console.log(options);
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <div className='d-flex'>
      <div className='mr-9 w-25'>
      <Text weight="strong">{'With Checkbox'}</Text><br /><br />
        <Dropdown
          withCheckbox={true}
          withSelectAll={false}
          options={disabledStoryOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'Without Checkbox'}</Text><br /><br />
        <Dropdown
          options={disabledStoryOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Disabled Option',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        isDeprecated: true,
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
        },
      },
    },
  },
};
