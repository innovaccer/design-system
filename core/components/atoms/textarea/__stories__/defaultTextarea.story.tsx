import * as React from 'react';
import { Textarea, Label } from '@/index';

export const defaultTextarea = () => (
  <>
    <Label withInput={true}>Comments</Label>
    <Textarea name="Textarea" className="w-25" placeholder="Enter your comments here" />
  </>
);

export default {
  title: 'Components/Textarea/Default Textarea',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea',
      },
    },
  },
};
