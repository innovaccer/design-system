import * as React from 'react';
import Input from '../Input';
import Caption from '@/components/atoms/caption';
import { action } from '@storybook/addon-actions';

export const inputWithHelpText = () => {

  return (
    <div className="Row">
      <div  className="mr-9 mb-5 w-25">
        <Input
          name="input"
          value="Value"
          type="password"
          onChange={action('on-change')}
        />
        <Caption withInput={true}>Pick a strong, unique password</Caption>
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
