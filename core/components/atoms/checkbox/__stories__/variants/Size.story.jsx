import * as React from 'react';
import { Checkbox, Label } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular'];
  const label = 'Checkbox';
  return (
    <div className="d-flex">
      {sizes.map((CheckboxSize, ind) => {
        return (
          <div key={ind} className="mr-7">
            <Label withInput={true}>{CheckboxSize.charAt(0).toUpperCase() + CheckboxSize.slice(1)}</Label>
            <Checkbox disabled={false} size={CheckboxSize} label={label} />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Checkbox/Variants/Size',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
