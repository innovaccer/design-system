import * as React from 'react';
import { TextField } from '@/index';

// CSF format story
export const Size = () => {
  const sizes = ['tiny', 'regular', 'large'];

  return (
    <div>
      {sizes.map((size, index) => {
        const capitalizedSize = size.charAt(0).toUpperCase() + size.slice(1);
        const label = capitalizedSize;
        const helpText = `This is a ${size} sized text field`;

        return (
          <div key={index} className="mb-8 w-25">
            <TextField label={label} helpText={helpText} size={size} max={50} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Input/TextField/TextField With Input/Size',
  component: TextField,
  parameters: {
    docs: {
      docPage: {
        title: 'TextField',
      },
    },
  },
};
