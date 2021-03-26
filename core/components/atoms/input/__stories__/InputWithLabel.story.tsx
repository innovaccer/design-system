import * as React from 'react';
import Input from '../Input';
import Label from '@/components/atoms/label';
import { action } from '@storybook/addon-actions';

export const inputWithLabel = () => (
  <>
    <Label withInput={true}>Full Name</Label>
    <Input
      name="input"
      value="Joy Lawson"
      onChange={action('on-change')}
    />
  </>
);

export default {
  title: 'Components/Input/Input With Label',
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
