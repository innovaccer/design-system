import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithTextarea } from '../../TextFieldWithTextarea';

// CSF format story
export const Size = () => {
  const sizes = ['small', 'regular'];

  return (
    <div>
      {sizes.map((size, index) => {
        const capitalizedSize = size.charAt(0).toUpperCase() + size.slice(1);
        const label = capitalizedSize;
        const helpText = `This is a ${size} sized text area field`;

        return (
          <div key={index} className="mb-8 w-25">
            <TextField withTextarea={true} label={label} helpText={helpText} size={size} max={50} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Input/TextField/TextField With TextArea/Size',
  component: TextFieldWithTextarea,
  parameters: {
    docs: {
      docPage: {
        title: 'TextField',
      },
    },
  },
};
