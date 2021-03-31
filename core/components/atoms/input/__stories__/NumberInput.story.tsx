import * as React from 'react';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

// CSF format story
export const inputWithNumber = () => (
  <div className="w-25">
    <Input
      name="input"
      type="number"
      size="regular"
      onChange={action('on-change')}
      value="10"
    />
  </div>
);

export default {
  title: 'Components/Input/Input With Number',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete']
        }
      }
    }
  }
};
