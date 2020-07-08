import * as React from 'react';
import Radio, { Size } from '../../index';

// CSF format story
export const size = () => {

  const sizes: Size[] = ['tiny', 'regular'];

  const name = 'gender';
  return (
    <div className="d-flex">
      {
        sizes.map((RadioSize, ind) => {
          return (
            <div key={ind} className="mr-9">
              <Radio
                size={RadioSize}
                label={RadioSize.charAt(0).toUpperCase() + RadioSize.slice(1)}
                name={name}
                value={RadioSize}
              />
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Radio/Variants',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
