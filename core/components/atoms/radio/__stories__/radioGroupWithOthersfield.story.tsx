import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Radio from '../index';

export const radioGroupWithOthersField = () => {

  const size = select(
    'size',
    ['tiny', 'regular'],
    undefined
  );
  const style = {
    display: 'flex',
  };

  return (
    <div style={style}>
    <div style={{ marginRight: '5%' }}>
    <div>
      <Radio
        size={size}
        label={'Option 1'}
        name={'options'}
        value={'Option 1'}
      />
      <Radio
        size={size}
        label={'Option 2'}
        name={'options'}
        value={'Option 2'}
        defaultChecked={true}
      />
      <Radio
        size={size}
        label={'Option 3'}
        name={'options'}
        value={'Option 3'}
      />
    </div>
     </div>
     <div>
      <Radio
        size={size}
        label={'Option 1'}
        name={'options2'}
        value={'Option 1'}
      />
      <Radio
        size={size}
        label={'Option 2'}
        name={'options2'}
        value={'Option 2'}
        defaultChecked={true}
      />
      <Radio
        size={size}
        label={'Option 3'}
        name={'options2'}
        value={'Option 3'}
      />
    </div>
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
