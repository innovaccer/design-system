import * as React from 'react';
import { Textarea, Label } from '@/index';

export const Size = () => (
  <div className="d-flex justify-content-between">
    <div className="w-50 pr-4">
      <Label id="label-regular" withInput={true} htmlFor="textarea-regular">
        Regular
      </Label>
      <Textarea
        id="textarea-regular"
        name="regular"
        size="regular"
        aria-labelledby="label-regular"
        placeholder="Enter your comments here"
      />
    </div>
    <div className="w-50">
      <Label id="label-small" withInput={true} size="small" htmlFor="textarea-small">
        Small
      </Label>
      <Textarea
        id="textarea-small"
        name="small"
        size="small"
        aria-labelledby="label-small"
        placeholder="Enter your comments here"
      />
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
