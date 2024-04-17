import * as React from 'react';
import { VerificationCodeInput, Label } from '@/index';

// CSF format story
export const disabled = () => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput disabled={true} value="1234" />
    </>
  );
};

export default {
  title: 'Components/Input/VerificationCodeInput/Variants/Disabled',
  component: VerificationCodeInput,
  parameters: {
    docs: {
      docPage: {
        title: 'VerificationCodeInput',
      },
    },
  },
};
