import * as React from 'react';
import { VerificationCodeInput, Label } from '@/index';

// CSF format story
export const error = () => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput error={true} />
    </>
  );
};

export default {
  title: 'Components/Input/VerificationCodeInput/Variants/Error',
  component: VerificationCodeInput,
  parameters: {
    docs: {
      docPage: {
        title: 'VerificationCodeInput',
      },
    },
  },
};
