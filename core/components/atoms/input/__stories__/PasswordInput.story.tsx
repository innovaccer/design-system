import * as React from 'react';
import Input from '../Input';
import Label from '@/components/atoms/label';
import Icon from '@/components/atoms/icon';
import { action } from '@storybook/addon-actions';

export const passwordInput = () => (
  <>
    <Label withInput={true}>Password</Label>
    <Input
      name="input"
      value="Value"
      type="password"
      actionIcon={<Icon name="visibility_off" />}
      onChange={action('on-change')}
    />
  </>
);

export default {
  title: 'Components/Input/Password Input',
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
