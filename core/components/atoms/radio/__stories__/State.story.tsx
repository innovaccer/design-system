import * as React from 'react';
import Radio from '../index';
import { docPage } from '@/utils/docPage';

// CSF format story
export const state = () => {

  const style = {
    display: 'flex',
  };

  const name = 'state';

  return (
    <div style={style}>
      <div style={{ marginRight: '5%' }}>
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
  title: 'Atoms|Radio',
  component: Radio,
  parameters: {
    docs: {
      page: () => docPage({ props: { exclude: ['key'] } })
    }
  }
};
