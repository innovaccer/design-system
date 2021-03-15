import * as React from 'react';
import Input from '../Input';
import Label from '@/components/atoms/label';
import { action } from '@storybook/addon-actions';

export const emailInput = () => (
  <>
    <Label withInput={true}>Email</Label>
    <Input
      name="input"
      value="joylawson@gmail.com"
      onChange={action('on-change')}
    />
  </>
);

export default {
  title: 'Components/Input',
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
