import * as React from 'react';
import Input from '../Input';
import Label from '@/components/atoms/label';
import { action } from '@storybook/addon-actions';

export const inputWithLabel = () => {
  return (
    <div className="Row">
      <div  className="mr-9 mb-8 w-25">
        <div >
          <Label withInput={true}>Full Name</Label>
          <Input
            name="input"
            value="Value"
            onChange={action('on-change')}
            required={false}
          />
        </div>
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
