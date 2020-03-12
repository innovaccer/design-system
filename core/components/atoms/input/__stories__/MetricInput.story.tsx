import * as React from 'react';
import Input from '../Input';
import Text from '@/components/atoms/text';
import { action } from '@storybook/addon-actions';

// CSF format story
export const metricInput = () => {

  return (
    <div>
      <div style={{ width: '20px' }}>
        <Input
          name="input"
          type="number"
          size="regular"
          onChangeHandler={action('on-change')}
        />
        <br />
        <Text weight="strong">Regular</Text>
      </div>
      <br />
      <div style={{ width: '20px' }}>
        <Input
          name="input"
          type="number"
          size="large"
          onChangeHandler={action('on-change')}
        />
        <br />
        <Text weight="strong">Large</Text>
      </div>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Input' };
