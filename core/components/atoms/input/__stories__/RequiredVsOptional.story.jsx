import * as React from 'react';
import { Input, Label, Text } from '@/index';

export const requiredVsOptionalMarking = () => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Label htmlFor="email" withInput={true} required={true}>
            Email
          </Label>
          <Input id="email" required placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Required Field</Text>
          </div>
        </div>
        <div className="ml-9">
          <Label htmlFor="email2" withInput={true}>
            Email
          </Label>
          <Input id="email2" placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Optional Field</Text>
          </div>
        </div>
      </div>
      <div className="d-flex mt-9">
        <div>
          <Label htmlFor="email3" withInput={true}>
            Email
          </Label>
          <Input id="email3" placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Required Field</Text>
          </div>
        </div>
        <div className="ml-9">
          <Label htmlFor="email4" withInput={true} optional={true}>
            Email
          </Label>
          <Input id="email4" placeholder="e.g lawsonjoy@gmail.com" />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Optional Field</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Input/Required Vs Optional Marking',
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
