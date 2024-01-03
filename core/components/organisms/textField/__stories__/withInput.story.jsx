import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithInput } from '../TextFieldWithInput';

// CSF format story
export const withInput = () => {
  return (
    <div className="w-25">
      <TextField />
    </div>
  );
};

const customCode = `() => {
  const [inputText, setInputText] = React.useState('');
  const [errorState, setErrorState] = React.useState(false);
  const [helpText, setHelpText] = React.useState('');

  const maxLimit = 50

  React.useEffect(() => {
    if (inputText.length > maxLimit) {
      setErrorState(true);
      setHelpText('character limit exceeded');
    } else {
      setErrorState(false);
      setHelpText('Pick a unique username');
    }
  }, [inputText]);

  return (
    <div className="w-25">
      <TextField
        error={errorState}
        max={maxLimit}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        label="Username"
        helpText={helpText}
      />
    </div>
  );
}`;

export default {
  title: 'Inputs/TextField/With Input',
  component: TextFieldWithInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TextField',
      },
    },
  },
};
