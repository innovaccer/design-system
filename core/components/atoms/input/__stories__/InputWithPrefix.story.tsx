import * as React from 'react';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

export const inputWithPrefix = () => {

  const label = 'USD';
  return (
    <div>
      <div className="w-25">
        <Input
          name="input"
          type="number"
          size="regular"
          inlineLabel={label}
          onChange={action('on-change')}
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
