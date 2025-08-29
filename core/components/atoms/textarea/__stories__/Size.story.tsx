import * as React from 'react';
import { Textarea, Label } from '@/index';

export const Size = () => (
  <div className="d-flex justify-content-between">
    <div className="w-50 pr-4">
      <Label withInput={true} htmlFor="regular">
        Regular
      </Label>
      <Textarea name="regular" size="regular" aria-labelledby="Regular" placeholder="Enter your comments here" />
    </div>
    <div className="w-50">
      <Label withInput={true} size="small" htmlFor="small">
        Small
      </Label>
      <Textarea name="small" size="small" aria-labelledby="Small" placeholder="Enter your comments here" />
    </div>
  </div>
);

export default {
  title: 'Components/Input/Textarea/Size',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea',
      },
    },
  },
};
