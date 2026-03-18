import * as React from 'react';
import { Column, Input, Row } from '@/index';
import ActionButton from '../../actionButton';

export const controlledInput = () => {
  const [value, setValue] = React.useState('Value');
  const handleParentChange = (event) => {
    const updatedValue = event.target.value;
    setValue(updatedValue);
  };
  const [value1, setValue1] = React.useState('Value');
  const onChangeHandler = (event) => {
    const updatedValue = event.target.value;
    setValue1(updatedValue);
  };
  const onClearHandler = () => {
    setValue1('');
  };
  return (
    <Row>
      <Column size={4}>
        <Input
          name="input"
          value={value}
          type="text"
          placeholder="Placeholder"
          aria-label="Placeholder input"
          actionIcon={
            <Input.ActionButton name="visibility_off" className="p-3" aria-label="Toggle password visibility" />
          }
          onChange={handleParentChange}
        />
      </Column>
      <Column size={4} className="ml-7">
        <Input
          name="input"
          value={value1}
          type="text"
          placeholder="PlaceHolder"
          aria-label="Placeholder input"
          onChange={onChangeHandler}
          onClear={onClearHandler}
        />
      </Column>
    </Row>
  );
};

const customCode = `() => {
  const [visibility, setVisibility] = React.useState(false);
  const [value, setValue] = React.useState('Value');
  const handleParentChange = (event) => {
    const updatedValue = event.target.value;
      setValue(updatedValue);
  };
  const [value1, setValue1] = React.useState('Value');
  const onChangeHandler = (event) => {
    const updatedValue = event.target.value;
      setValue1(updatedValue);
  };
  const onClearHandler = () => {
    const updatedValue = '';
      setValue1(updatedValue);
  };
  return (
    <Row>
    <Column size={4}>
      <Input
        name="input"
        value={value}
        type={visibility ? 'text' : 'password'}
        placeholder="Placeholder"
        aria-label="Placeholder input"
        actionIcon={
          <Input.ActionButton
            onClick={() => {
              setVisibility((x) => !x);
            }}
            name={visibility ? 'visibility_on' : 'visibility_off'}
            aria-label={visibility ? 'Show Password' : 'Hide Password'}
            className="cursor-pointer p-3"
          />
        }
        onChange={handleParentChange}
      />
    </Column>
    <Column size={4} className="ml-7">
      <Input
        name="input"
        value={value1}
        type="text"
        placeholder="PlaceHolder"
        aria-label="Placeholder input"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      />
    </Column>
  </Row>
  );
};`;

export default {
  title: 'Components/Input/Input/Variants/Controlled Input',
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
