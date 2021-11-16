import * as React from 'react';
import { Input, Icon, Label, Caption } from '@/index';

export const inputWithCaption = () => {
  const [visibility, setVisibility] = React.useState(false);
  const [visibility2, setVisibility2] = React.useState(false);
  return (
    <div className="d-flex">
      <div>
        <Label htmlFor="password-1" withInput={true}>
          Password
        </Label>
        <Input
          id="password-1"
          placeholder="Password"
          value="Value"
          type={visibility ? 'text' : 'password'}
          actionIcon={
            <Icon
              onClick={() => setVisibility((x) => !x)}
              name={visibility ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <Caption withInput={true}>Create a string, unique password</Caption>
      </div>
      <div className="ml-6">
        <Label htmlFor="password-2" withInput={true}>
          Password
        </Label>
        <Input
          id="password-2"
          placeholder="Password"
          value="Value"
          type={visibility2 ? 'text' : 'password'}
          actionIcon={
            <Icon
              onClick={() => setVisibility2((x) => !x)}
              name={visibility2 ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <Caption withInput={true} error={true}>
          Create a password with at least 8 characters
        </Caption>
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
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
