import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithTextarea } from '../../TextFieldWithTextarea';

// CSF format story
export const withTextArea = () => {
  return (
    <div className="w-25">
      <TextField withTextarea={true} />
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
      setHelpText('Enter billing details');
    }
  }, [inputText]);

  return (
    <div className="w-25">
      <TextField
        withTextarea={true}
        max={maxLimit}
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value); 
        }}
        label="Description"
        helpText={helpText}
      />
    </div>
  );
}`;

export default {
  title: 'Components/Input/TextField/TextField With TextArea/With TextArea',
  component: TextFieldWithTextarea,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'TextField',
      },
    },
  },
};
