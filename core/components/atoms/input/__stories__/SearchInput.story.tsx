import * as React from 'react';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

export const searchInput = () => (
  <Input
    name="input"
    placeholder="Search"
    onChange={action('on-change')}
    icon={'search'}
  />
);

export default {
  title: 'Components/Input/Search Input',
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
