import * as React from 'react';
import Radio from '../Radio';

// CSF format story
export const withHelpText = () => {
  return (
    <Radio
      label={'Share all your data'}
      value={'accepted'}
      name={'consent'}
      helpText={'This app will have access to both your healthcare data and some personal information.'}
      className="w-25"
    />
  );
};

export default {
  title: 'Components/Radio/With Help Text',
  component: Radio,
};
