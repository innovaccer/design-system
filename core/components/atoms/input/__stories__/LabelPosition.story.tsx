import * as React from 'react';
import { Input, Label } from '@/index';

export const labelPosition = () => {
  return (
    <div className="d-flex align-items-end">
      <div>
        <Label htmlFor="fullName" withInput={true}>
          Full Name
        </Label>
        <Input placeholder="Full name" id="fullName" value="Joy Lawson" />
      </div>
      <div className="d-flex align-items-center ml-9">
        <Label htmlFor="fullName2" className="mr-6">
          Full Name
        </Label>
        <Input placeholder="Full name" id="fullName2" value="Joy Lawson" />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Label Position',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
