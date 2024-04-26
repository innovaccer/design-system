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

const customCode = `() => {
  const [inputValue, setInputValue] = React.useState('Joy Lawson');
  const [secondInputValue, setSecondInputValue] = React.useState('Joy Lawson');
  return (
    <div className="d-flex align-items-end">
      <div>
        <Label htmlFor="fullName" withInput={true}>
          Full Name
        </Label>
        <Input
          placeholder="Full name"
          id="fullName"
          value={inputValue}
          onChange={(ev) => {
            ev.persist();
            setInputValue(ev.target.value);
          }}
        />
      </div>
      <div className="d-flex align-items-center ml-9">
        <Label htmlFor="fullName2" className="mr-6">
          Full Name
        </Label>
        <Input
          placeholder="Full name"
          id="fullName2"
          value={secondInputValue}
          onChange={(ev) => {
            ev.persist();
            setSecondInputValue(ev.target.value);
          }}
        />
      </div>
    </div>
  );
};`;

export default {
  title: 'Components/Input/Input/Label Position',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        customCode,
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
