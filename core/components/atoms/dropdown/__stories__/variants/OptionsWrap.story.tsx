import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyWrapOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

// CSF format story
export const optionsWrap = () => {

  return (
    <div style={{ display: 'flex', minHeight: '240px' }}>
      <div style={{ marginRight: '5%', width: '128px' }}>
        <Text weight="strong">{'Options Trimmed'}</Text> <br /><br />
        <Dropdown options={storyWrapOptions} placeholder={'Select'} />
      </div>
      <div style={{ marginRight: '5%', width: '128px' }}>
        <Text weight="strong">{'Options Wrapped'}</Text> <br /><br />
        <Dropdown options={storyWrapOptions} placeholder={'Select'} truncateOption={false} />
      </div>
    </div>
  );
};

const customCode = `() => {
  const storyWrapOptions = [
    {
      label: 'Design System Dropdown',
      value: 'Design System Dropdown'
    },
    {
      label: 'UI Kit Dropdown',
      value: 'UI Kit Dropdown',
    },
    {
      label: 'Innovaccer Analytics',
      value: 'Innovaccer Analytics'
    }
  ];
  return (
    <div className='d-flex'>
      <div className='mr-9' style={{ width: '128px' }}>
        <Text weight="strong">{'Options Trimmed'}</Text> <br /><br />
        <Dropdown options={storyWrapOptions} placeholder={'Select'} />
      </div>
      <div className='mr-9' style={{ width: '128px' }}>
        <Text weight="strong">{'Options Wrapped'}</Text> <br /><br />
        <Dropdown options={storyWrapOptions} placeholder={'Select'} truncateOption={false} />
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
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead']
        }
      }
    }
  }
};
