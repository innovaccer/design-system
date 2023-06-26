import * as React from 'react';
import { Radio } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular'];

  const name = 'gender';
  return (
    <div className="d-flex w-25 justify-content-between">
      {sizes.map((RadioSize, ind) => {
        return (
          <Radio
            key={ind}
            size={RadioSize}
            label={RadioSize.charAt(0).toUpperCase() + RadioSize.slice(1)}
            name={name}
            value={RadioSize}
          />
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Radio/Variants/Size',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
