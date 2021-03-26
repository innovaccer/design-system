import * as React from 'react';
import Input from '../Input';
import Caption from '@/components/atoms/caption';
import { action } from '@storybook/addon-actions';

export const inputWithHelpText = () => (
  <>
    <Input
      name="input"
      value="Value"
      type="password"
      onChange={action('on-change')}
    />
    <Caption withInput={true}>Pick a strong, unique password</Caption>
  </>
);

export default {
  title: 'Components/Input/Input With Help Text',
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
