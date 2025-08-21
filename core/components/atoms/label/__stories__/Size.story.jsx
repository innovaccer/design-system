import * as React from 'react';
import { Label } from '@/index';

// CSF format story
export const Size = () => (
  <div className="d-flex w-50 align-items-center justify-content-between">
    <Label>Regular Label</Label>
    <Label size="small">Small Label</Label>
  </div>
);

export default {
  title: 'Components/Label/Size',
  component: Label,
  parameters: {
    docs: {
      docPage: {
        title: 'Label',
      },
    },
  },
};
