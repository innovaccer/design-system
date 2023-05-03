import * as React from 'react';
import { Textarea, Label } from '@/index';

export const defaultTextarea = () => (
  <>
    <Label withInput={true} htmlFor="comments">
      Comments
    </Label>
    <Textarea
      name="comments"
      id="comments"
      aria-labelledby="Comments"
      className="w-50"
      placeholder="Enter your comments here"
    />
  </>
);

export default {
  title: 'Inputs/Textarea/Default Textarea',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea',
      },
    },
  },
};
