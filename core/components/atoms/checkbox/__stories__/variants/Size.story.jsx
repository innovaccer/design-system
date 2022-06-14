import * as React from 'react';
import Checkbox from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular'];
  const label = 'Checkbox';
  return (
    <div className="d-flex">
      {sizes.map((CheckboxSize, ind) => {
        return (
          <div key={ind} className="mr-5">
            <div className="h-50">
              <Checkbox defaultChecked={true} disabled={false} size={CheckboxSize} label={label} />
            </div>
            <br />
            <Text weight="strong">{CheckboxSize.charAt(0).toUpperCase() + CheckboxSize.slice(1)}</Text>
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
