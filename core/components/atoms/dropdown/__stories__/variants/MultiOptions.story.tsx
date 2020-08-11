import * as React from 'react';
import Dropdown from '../../Dropdown';
import { action } from '@storybook/addon-actions';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const multiOptions = () => {
  const style = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    marginRight: '5%',
    width: '150px'
  };

  const onClose = (options: any) => {
    return action(`dropdown closed with selected values: ${options}`)();
  };

  const onChangeHandler = (selectedValues: any[]) => {
    return action(`selected values length: ${selectedValues}`)();
  };

  return (
    <div style={{ display: 'flex', minHeight: '300px' }}>
      <div style={style}>
        <Text weight="strong">{'With Apply Button'}</Text><br />
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
        <Text weight="strong">{'Without Apply Button'}</Text><br />
        <Dropdown
          withCheckbox={true}
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
      icon: 'events',
      subInfo: 'subInfo'
    });
  }

  const style = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    marginRight: '5%',
    width: '150px'
  };

  const onClose = (options) => {
    console.log(options);
  };

  const onChangeHandler = (selectedValues) => {
    console.log(selectedValues);
  };

  return (
    <div style={{ display: 'flex', minHeight: '300px' }}>
      <div style={style}>
        <Text weight="strong">{'With Apply Button'}</Text><br />
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
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
        <Text weight="strong">{'Without Apply Button'}</Text><br />
        <Dropdown
          withCheckbox={true}
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
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
