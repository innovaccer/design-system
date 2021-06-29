import * as React from 'react';
import { Input, Icon, Label, Caption } from '@/index';

export const inputWithCaption = () => {
  return (
    <div className="d-flex">
      <div>
        <Label withInput={true}>Password</Label>
        <Input
          name="input"
          value="Value"
          type="password"
          actionIcon={(
            <Icon
              name="visibility_off"
              className="cursor-pointer"
            />
          )}
        />
        <Caption withInput={true}>Create a string, unique password</Caption>
      </div>
      <div className="ml-6">
        <Label withInput={true}>Password</Label>
        <Input
          name="input"
          value="Value"
          type="password"
          actionIcon={(
            <Icon
              name="visibility_off"
              className="cursor-pointer"
            />
          )}
        />
        <Caption withInput={true} error={true}>Create a password with atleat 8 characters</Caption>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Input/Input With Caption',
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
