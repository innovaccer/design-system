import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithInput } from '../TextFieldWithInput';

// CSF format story
export const withInput = () => {
  return (
    <div className="w-25">
      <TextField />
    </div>
  );
};

const customCode = `() => {
    return (
        <div className="w-25">
          <TextField label="Label for TextField" helpText="I am the helptext"/>
        </div>
    );
}`;

export default {
  title: 'Inputs/TextField/With Input',
  component: TextFieldWithInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TextField',
      },
    },
  },
};
