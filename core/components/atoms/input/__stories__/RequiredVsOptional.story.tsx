import * as React from 'react';
import { Input, Label, Text } from '@/index';

export const requiredVsOptionalMarking = () => {
  return (
    <div>
      <div className="d-flex">
        <div>
          <Label withInput={true} required={true}>Email</Label>
          <Input
            name="input"
            placeholder="e.g lawsonjoy@gmail.com"
          />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Required Field</Text>
          </div>
        </div>
        <div className="ml-9">
          <Label withInput={true}>Email</Label>
          <Input
            name="input"
            placeholder="e.g lawsonjoy@gmail.com"
          />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Optional Field</Text>
          </div>
        </div>
      </div>
      <div className="d-flex mt-9">
        <div>
          <Label withInput={true}>Email</Label>
          <Input
            name="input"
            placeholder="e.g lawsonjoy@gmail.com"
          />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Required Field</Text>
          </div>
        </div>
        <div className="ml-9">
          <Label withInput={true} optional={true}>Email</Label>
          <Input
            name="input"
            placeholder="e.g lawsonjoy@gmail.com"
          />
          <div className="d-flex align-items-center justify-content-center mt-5">
            <Text weight="medium">Optional Field</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Required Vs Optional Marking',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete']
        }
      }
    }
  }
};
