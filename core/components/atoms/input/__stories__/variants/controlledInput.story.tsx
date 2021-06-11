import * as React from 'react';
import { Input } from '@/index';
import Icon from '@/components/atoms/icon';

export const controlledInput = () => {
  const [value, setValue] = React.useState('Value');
  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    window.setTimeout(() => {
      setValue(updatedValue);
    }, 1000);
  };
  const [value1, setValue1] = React.useState('Value');
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = event.target.value;
    window.setTimeout(() => {
      setValue1(updatedValue);
    }, 1000);
  };
  const onClearHandler = () => {
    const updatedValue = '';
    window.setTimeout(() => {
      setValue1(updatedValue);
    }, 1000);
  };
  return (
    <div className="d-flex">
      <Input
        name="input"
        value={value}
        type="text"
        placeholder="Placeholder"
        actionIcon={<Icon name="visibility_off" />}
        onChange={handleParentChange}
      />
      <Input
        name="input"
        value={value1}
        type="text"
        placeholder="PlaceHolder"
        onChange={onChangeHandler}
        onClear={onClearHandler}
      />
    </div>
  );
};
export default {
  title: 'Components/Input/Variants/Controlled Input',
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
