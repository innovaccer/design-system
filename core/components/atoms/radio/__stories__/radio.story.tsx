import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Radio from '../index';

// CSF format story
export const all = () => {

  const size = select(
    'size',
    ['tiny', 'regular'],
    undefined
  );

  return (
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
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Radio' };
