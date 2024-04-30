import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithInput } from '../../TextFieldWithInput';

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
  const [helpText, setHelpText] = React.useState('');

  const maxLimit = 50

  React.useEffect(() => {
    if (inputText.length > maxLimit) {
      setHelpText('Character limit exceeded');
    } else {
      setHelpText('Pick a unique username');
    }
  }, [inputText]);

  return (
    <div className="w-25">
      <TextField
        max={maxLimit}
        value={inputText}
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
  title: 'Components/Input/TextField/TextField With Input/With Input',
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
