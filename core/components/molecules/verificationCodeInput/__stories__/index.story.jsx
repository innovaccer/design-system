import * as React from 'react';
import { VerificationCodeInput, Label } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const inputType = 'number';

  const fields = undefined;

  const value = '6543';

  const placeholder = '-';

  const disabled = false;

  const autoFocus = true;

  const readOnly = false;

  const error = false;

  const pattern = '';

  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput
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
    </>
  );
};

export default {
  title: 'Components/VerificationCodeInput/All',
  component: VerificationCodeInput,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
      },
    },
  },
};
