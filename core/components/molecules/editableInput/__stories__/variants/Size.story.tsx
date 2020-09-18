import * as React from 'react';
import { EditableInput, Label } from '@/index';

// CSF format story
export const size = () => {
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const onChangeName = (value: string) => {
    setName(value);
  };

  const onChangeWeight = (value: string) => {
    setWeight(value);
  };

  return (
    <div className="d-flex">
      <div className="d-flex flex-column" style={{ width: 'var(--spacing-9)' }}>
        <Label withInput={true} className="ml-5">Regular</Label>
        <EditableInput
          placeholder="First Name"
          value={name}
          onChange={onChangeName}
          className="mr-5"
        />
      </div>
      <div className="d-flex flex-column" style={{ width: 'var(--spacing-7)' }}>
        <Label withInput={true} className="ml-5">Tiny</Label>
        <EditableInput
          placeholder="Add Weight"
          value={weight}
          onChange={onChangeWeight}
          size="tiny"
        />
      </div>
    </div>
  );
};

const customCode = `() => {
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const onChangeName = (value) => {
    setName(value);
  };

  const onChangeWeight = (value) => {
    setWeight(value);
  }

  return (
    <div className="d-flex">
      <div className="d-flex flex-column" style={{ width: 'var(--spacing-9)' }}>
        <Label withInput={true} className="ml-5">Regular</Label>
        <EditableInput
          placeholder="First Name"
          value={name}
          onChange={onChangeName}
          className="mr-5"
        />
      </div>
      <div className="d-flex flex-column" style={{ width: 'var(--spacing-7)' }}>
        <Label withInput={true} className="ml-5">Tiny</Label>
        <EditableInput
          placeholder="Add Weight"
          value={weight}
          onChange={onChangeWeight}
          size="tiny"
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Molecules|EditableInput/Variants',
  component: EditableInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      }
    }
  }
};
