import * as React from 'react';
import Label from '@/components/atoms/label';
import { Textarea } from '@/index';

export const defaultTextarea = () => (
  <>
    <Label withInput={true}>Description</Label>
    <Textarea
      name="Textarea"
      placeholder="Write a description"
    />
  </>
);

export default {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea'
      }
    }
  }
};
