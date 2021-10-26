import * as React from 'react';
import { VerificationCodeInput, Label } from '@/index';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const inputType = select('type', ['text', 'password', 'number'], 'number');

  const fields = select('fields', [4, 6], undefined);

  const value = text('values', '6543');

  const placeholder = text('placeholder', '-');

  const disabled = boolean('disabled', false);

  const autoFocus = boolean('autoFocus', true);

  const readOnly = boolean('readOnly', false);

  const error = boolean('error', false);

  const pattern = text('pattern', '');

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
