import * as React from 'react';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

export const inputWithPrefix = () => (
  <div className="w-25">
    <Input
      name="input"
      type="number"
      size="regular"
      inlineLabel={'USD'}
      onChange={action('on-change')}
    />
  </div>
);

export default {
  title: 'Atoms|Input',
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
