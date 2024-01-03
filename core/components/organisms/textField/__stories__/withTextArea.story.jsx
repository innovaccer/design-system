import * as React from 'react';
import { TextField } from '@/index';
import { TextFieldWithTextarea } from '../TextFieldWithTextarea';

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
  const [errorState, setErrorState] = React.useState(false);
  const [helpText, setHelpText] = React.useState('');

  const maxLimit = 50

  React.useEffect(() => {
    if (inputText.length > maxLimit) {
      setErrorState(true);
      setHelpText('character limit exceeded');
    } else {
      setErrorState(false);
      setHelpText('Enter billing details');
    }
  }, [inputText]);

  return (
    <div className="w-25">
      <TextField
        withTextarea={true}
        error={errorState}
        max={maxLimit}
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
  title: 'Inputs/TextField/With Text Area',
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
