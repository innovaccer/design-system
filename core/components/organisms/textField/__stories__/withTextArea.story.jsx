import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithTextarea } from '../TextFieldWithTextarea';

// CSF format story
export const withTextArea = () => {
  return (
    <div className="w-25">
      <TextField withTextarea={true} />
    </div>
  );
};

const customCode = `() => {
    return (
        <div className="w-25">
          <TextField withTextarea={true} label="Textfield label" helpText="I am the helptext"/>
        </div>
    );
}`;

export default {
  title: 'Inputs/TextField/With Text Area',
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
