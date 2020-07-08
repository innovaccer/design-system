import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';

// CSF format story
export const multiOptions = () => {
  const style = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    marginRight: '5%',
    width: '150px'
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
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
        <Text weight="strong">{'Without Apply Button'}</Text><br />
        <Dropdown withCheckbox={true} options={storyOptions} placeholder={'Select'} />
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

  return (
    <div className='d-flex' style={{ minHeight: '340px' }}>
      <div className='mr-10' style={{ width: '150px' }}>
      <Text weight="strong">{'With Apply Button'}</Text> <br /><br />
        <Dropdown withCheckbox={true} showApplyButton={true} options={storyOptions} />
      </div>
      <div>
        <Text weight="strong">{'Without Apply Button'}</Text> <br /><br />
        <Dropdown withCheckbox={true} options={storyOptions} />
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
        title: 'Dropdown'
      }
    }
  }
};
