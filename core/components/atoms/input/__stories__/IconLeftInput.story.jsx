import * as React from 'react';
import { Input } from '@/index';
import { action } from '@/utils/action';

export const iconLeftInput = () => (
  <Input name="input" placeholder="Search" className="w-25" onChange={action('on-change')} icon="search" />
);

export default {
  title: 'Components/Input/Input/Icon Left Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
