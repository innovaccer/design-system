import * as React from 'react';
import Input from '../../Input';
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
          onChange={action('on-change')}
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
          onChange={action('on-change')}
        />
        <br />
        <Text weight="strong">Large</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Input/Variants',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input'
      }
    }
  }
};
