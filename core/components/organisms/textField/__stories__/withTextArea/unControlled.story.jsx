import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithTextarea } from '../../TextFieldWithTextarea';

// CSF format story
export const WithUncontrolledTextArea = () => {
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
        label="Description"
        withTextarea={true}
        helpText="Enter billing details"
      />
    </div>
  );
}`;

export default {
  title: 'Components/Input/TextField/TextField With TextArea/With Uncontrolled TextArea',
  component: TextFieldWithTextarea,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TextField',
      },
    },
  },
};
