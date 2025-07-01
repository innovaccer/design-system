import * as React from 'react';
import Dropdown from '../../Dropdown';
import { action } from '@/utils/action';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const multiOptions = () => {
  const onClose = (options) => {
    return action(`dropdown closed with selected values: ${options}`)();
  };

  const onChangeHandler = (selectedValues) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  return (
    <div className="d-flex">
      <div className="mr-9 w-25">
        <Text weight="strong">{'With Apply Button'}</Text>
        <br />
        <br />
        <Dropdown
          maxHeight={180}
          withCheckbox={true}
          showApplyButton={true}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'Without Apply Button'}</Text>
        <br />
        <br />
        <Dropdown
          withCheckbox={true}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className="mr-9 w-25">
        <Text weight="strong">{'Without Select All (Options <= 50)'}</Text>
        <br />
        <br />
        <Dropdown
          withCheckbox={true}
          withSelectAll={false}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      icon: 'event',
      subInfo: 'subInfo'
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
        <Text weight="strong">{'With Apply Button'}</Text><br /><br />
        <Dropdown
          maxHeight={180}
          withCheckbox={true}
          showApplyButton={true}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className='mr-9 w-25'>
        <Text weight="strong">{'Without Apply Button'}</Text><br /><br />
        <Dropdown
          withCheckbox={true}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
      <div className='mr-9 w-25'>
        <Text weight="strong">{'Without Select All (Options <= 50)'}</Text><br /><br />
        <Dropdown
          withCheckbox={true}
          withSelectAll={false}
          options={storyOptions}
          placeholder={'Select'}
          onChange={onChangeHandler}
          onClose={onClose}
        />
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Multi Options',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
