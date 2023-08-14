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
  const max = 50;
  React.useEffect(() => {
    if (inputText.length > max) {
      setErrorState(true);
      setHelpText('I am in error state');
    } else {
      setErrorState(false);
      setHelpText('I am the helptext');
    }
  }, [inputText]);
  return (
    <div className="w-25">
      <TextField
        withTextarea={true}
        error={errorState}
        max={max}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        label="Label for TextField"
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
