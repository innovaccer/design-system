import * as React from 'react';
import Radio from '../index';

export const inlineRadioGroup = () => (
  <div className="d-flex">
    <div className="mr-9 ">

      <Radio
        size={'regular'}
        label={'Option 1'}
        name={'options'}
        value={'Option 1'}
      />
    </div>
    <div className="mr-9 ">
      <Radio
        size={'regular'}
        label={'Option 2'}
        name={'options'}
        value={'Option 2'}
        defaultChecked={true}
      />
    </div>
    <div className="mr-9 ">
      <Radio
        size={'regular'}
        label={'Option 3'}
        name={'options'}
        value={'Option 3'}
      />
    </div>
  </div>
);

export default {
  title: 'Components/Radio/Inline Radio Group',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] }
      }
    }
  }
};
