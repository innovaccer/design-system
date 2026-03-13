import * as React from 'react';
import { Textarea, Label } from '@/index';

export const Error = () => (
  <div className="w-50">
    <Label withInput={true} htmlFor="error">
      Error
    </Label>
    <Textarea name="error" id="error" error={true} placeholder="This is the error state." />
  </div>
);

export default {
  title: 'Components/Input/Textarea/Variants/Error',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea',
      },
    },
  },
};
