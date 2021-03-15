import * as React from 'react';
import Input from '../Input';
import Label from '@/components/atoms/label';
import { action } from '@storybook/addon-actions';

export const requiredInputWithLabel = () => (
  <>
    <Label required={true} withInput={true}>First Name</Label>
    <Input
      name="input"
      value="Joy"
      onChange={action('on-change')}
      required={true}
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
