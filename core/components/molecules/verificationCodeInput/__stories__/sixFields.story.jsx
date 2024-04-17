import * as React from 'react';
import { VerificationCodeInput, Label } from '@/index';

// CSF format story
export const WithSixFields = () => {
  return (
    <>
      <Label withInput={true}>Verification code</Label>
      <VerificationCodeInput fields={6} />
    </>
  );
};

export default {
  title: 'Components/Input/VerificationCodeInput/With Six Fields',
  component: VerificationCodeInput,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
      },
    },
  },
};
