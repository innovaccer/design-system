import * as React from 'react';
import Radio from '../../index';

// CSF format story
export const state = () => {

  const name = 'state';

  return (
    <div className="d-flex">
      <div className="mr-9">
        <Radio
          label={'Disabled'}
          name={name}
          value={'Disabled'}
          disabled={true}
        />
      </div>
      <div>
        <Radio
          label={'Enabled'}
          name={name}
          value={'Enabled'}
          disabled={false}
        />
      </div>
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
