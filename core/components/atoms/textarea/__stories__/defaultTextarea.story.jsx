import * as React from 'react';
import { Textarea, Label } from '@/index';

export const defaultTextarea = () => (
  <div className="w-50">
    <Label withInput={true} htmlFor="comments">
      Comments
    </Label>
    <Textarea name="comments" id="comments" aria-labelledby="Comments" placeholder="Enter your comments here" />
  </div>
);

export default {
  title: 'Components/Input/Textarea/Default Textarea',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea',
      },
    },
  },
};
