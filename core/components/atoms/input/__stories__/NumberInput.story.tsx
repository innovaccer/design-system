import * as React from 'react';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

// CSF format story
export const inputWithNumber = () => {

  return (
    <div>
      <div style={{ width: '20px' }}>
        <Input
          name="input"
          type="number"
          size="regular"
          onChange={action('on-change')}
          value="0"
        />
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input'
      }
    }
  }
};
