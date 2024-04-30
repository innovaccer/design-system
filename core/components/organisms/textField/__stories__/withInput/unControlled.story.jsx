import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithInput } from '../../TextFieldWithInput';

// CSF format story
export const WithUncontrolledInput = () => {
  return (
    <div className="w-25">
      <TextField />
    </div>
  );
};

const customCode = `() => {

  return (
    <div className="w-25">
      <TextField
        label="Username"
        helpText="Enter a unique name"
      />
    </div>
  );
}`;

export default {
  title: 'Components/Input/TextField/TextField With Input/With Uncontrolled Input',
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
