import * as React from 'react';
import { Input, Label, HelpText, Row, Column } from '@/index';
import ActionButton from '../actionButton';

export const inputWithHelpText = () => {
  const [visibility, setVisibility] = React.useState(false);
  const [visibility2, setVisibility2] = React.useState(false);
  return (
    <Row>
      <Column size={4}>
        <Label htmlFor="password-1" withInput={true}>
          Password
        </Label>
        <Input
          id="password-1"
          placeholder="Password"
          value="Value"
          type={visibility ? 'text' : 'password'}
          actionIcon={
            <Input.ActionButton
              onClick={() => setVisibility((x) => !x)}
              name={visibility ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <HelpText message={'Create a string, unique password'} />
      </Column>
      <Column size={4} className="ml-7">
        <Label htmlFor="password-2" withInput={true}>
          Password
        </Label>
        <Input
          id="password-2"
          placeholder="Password"
          value="Value"
          type={visibility2 ? 'text' : 'password'}
          actionIcon={
            <Input.ActionButton
              onClick={() => setVisibility2((x) => !x)}
              name={visibility2 ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <HelpText error={true} message={'Create a password with at least 8 characters'} />
      </Column>
    </Row>
  );
};

const customCode = `() => {
  const [visibility, setVisibility] = React.useState(false);
  const [visibility2, setVisibility2] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('Value');
  const [secondInputValue, setSecondInputValue] = React.useState('Value');
  return (
    <Row>
      <Column size={4}>
        <Label htmlFor="password-1" withInput={true}>
          Password
        </Label>
        <Input
          id="password-1"
          placeholder="Password"
          value={inputValue}
          type={visibility ? 'text' : 'password'}
          onChange={(ev) => {
            ev.persist();
            setInputValue(ev.target.value);
          }}
          actionIcon={
            <Input.ActionButton
              aria-label={visibility ? 'Show Password' : 'Hide Password'}
              onClick={() => setVisibility((x) => !x)}
              name={visibility ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <HelpText message={'Create a string, unique password'} />
      </Column>
      <Column size={4} className="ml-7">
        <Label htmlFor="password-2" withInput={true}>
          Password
        </Label>
        <Input
          id="password-2"
          placeholder="Password"
          value={secondInputValue}
          type={visibility2 ? 'text' : 'password'}
          onChange={(ev) => {
            ev.persist();
            setSecondInputValue(ev.target.value);
          }}
          actionIcon={
            <Input.ActionButton
              aria-label={visibility ? 'Show Password' : 'Hide Password'}
              onClick={() => setVisibility2((x) => !x)}
              name={visibility2 ? 'visibility_on' : 'visibility_off'}
              className="cursor-pointer"
            />
          }
        />
        <HelpText error={true} message={'Create a password with at least 8 characters'} />
      </Column>
    </Row>
  );
};`;

export default {
  title: 'Components/Input/Input With Help Text',
  component: Input,
  subcomponents: { ActionButton },
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
