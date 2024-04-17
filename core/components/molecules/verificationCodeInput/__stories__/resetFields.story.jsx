import * as React from 'react';
import { Button, VerificationCodeInput, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const WithResetButton = () => {
  const inputType = 'number';

  const fields = undefined;

  const placeholder = '-';

  const disabled = false;

  const autoFocus = true;

  const readOnly = false;

  const error = false;

  const pattern = '';
  const [counter, setCounter] = React.useState(0);
  const [value, setValue] = React.useState('1234');
  const handleClick = () => {
    setCounter(counter + 1);
    setValue('----');
  };

  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput
        key={counter}
        fields={fields}
        type={inputType}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        onComplete={action('on-complete')}
        onFocus={action('on-focus')}
        onBlur={action('on-blur')}
        placeholder={placeholder}
        error={error}
        pattern={pattern}
        // TODO(a11y)
        //  eslint-disable-next-line
        autoFocus={autoFocus}
      />
      <Button className="mt-5" onClick={handleClick}>
        Reset
      </Button>
    </>
  );
};

const customCode = `() => {
    const inputType = 'number';
  
    const fields = undefined;
  
    const placeholder = '-';
  
    const disabled = false;
  
    const autoFocus = true;
  
    const readOnly = false;
  
    const error = false;
  
    const pattern = '';
    const [counter, setCounter] = React.useState(0);
    const [value, setValue] = React.useState('1234');
    const handleClick = () => {
      setCounter(counter + 1);
      setValue('----');
    };
  
    return (
      <>
        <Label withInput={true}>Verification code</Label>
        <VerificationCodeInput
          key={counter}
          fields={fields}
          type={inputType}
          value={value}
          disabled={disabled}
          readOnly={readOnly}
          onComplete={console.log('on-complete')}
          onFocus={console.log('on-focus')}
          onBlur={console.log('on-blur')}
          placeholder={placeholder}
          error={error}
          pattern={pattern}
          // TODO(a11y)
          //  eslint-disable-next-line
          autoFocus={autoFocus}
        />
        <Button className="mt-5" onClick={handleClick}>
          Reset
        </Button>
      </>
    );
  }`;

export default {
  title: 'Components/Input/VerificationCodeInput/With Reset Button',
  component: VerificationCodeInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Input',
      },
    },
  },
};
