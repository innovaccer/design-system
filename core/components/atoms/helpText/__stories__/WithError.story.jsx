import * as React from 'react';
import { HelpText, Label, Input } from '@/index';

// CSF format story
export const withError = () => {
  return (
    <div className="w-25">
      <Label required={true} withInput={true}>
        Password
      </Label>
      <Input error={true} name="input" required={true} type="password" />
      <HelpText error={true} message="Pick a strong, unique password" />
    </div>
  );
};

export default {
  title: 'Components/HelpText/With Error',
  component: HelpText,
};
