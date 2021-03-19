import * as React from 'react';
import Radio from '../index';

export const radioGroup = () => (
  <div>
    <Radio
      size={'regular'}
      label={'Option 1'}
      name={'options'}
      value={'Option 1'}
    />
    <Radio
      size={'regular'}
      label={'Option 2'}
      name={'options'}
      value={'Option 2'}
      defaultChecked={true}
    />
    <Radio
      size={'regular'}
      label={'Option 3'}
      name={'options'}
      value={'Option 3'}
    />
  </div>
);

export default {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
