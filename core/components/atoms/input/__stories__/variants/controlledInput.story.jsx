import * as React from 'react';
import { Column, Input, Row } from '@/index';
import ActionButton from '../../actionButton';

export const controlledInput = () => {
  const [value, setValue] = React.useState('Value');
  const handleParentChange = (event) => {
    const updatedValue = event.target.value;
    this.window.setTimeout(() => {
      setValue(updatedValue);
    }, 1000);
  };
  const [value1, setValue1] = React.useState('Value');
  const onChangeHandler = (event) => {
    const updatedValue = event.target.value;
    this.window.setTimeout(() => {
      setValue1(updatedValue);
    }, 1000);
  };
  const onClearHandler = () => {
    const updatedValue = '';
    this.window.setTimeout(() => {
      setValue1(updatedValue);
    }, 1000);
  };
  return (
    <Row>
      <Column size={4}>
        <Input
          name="input"
          value={value}
          type="text"
          placeholder="Placeholder"
          actionIcon={<Input.ActionButton name="visibility_off" />}
          onChange={handleParentChange}
        />
      </Column>
      <Column size={4} className="ml-7">
        <Input
          name="input"
          value={value1}
          type="text"
          placeholder="PlaceHolder"
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
        actionIcon={
          <Input.ActionButton
            onClick={() => {
              setVisibility((x) => !x);
            }}
            name={visibility ? 'visibility_on' : 'visibility_off'}
            aria-label={visibility ? 'Show Password' : 'Hide Password'}
            className="cursor-pointer"
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
