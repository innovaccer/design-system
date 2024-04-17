import * as React from 'react';
import { EditableInput, Label, Row, Column } from '@/index';

// CSF format story
export const size = () => {
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');

  const onChangeName = (value) => {
    setName(value);
  };

  const onChangeWeight = (value) => {
    setWeight(value);
  };

  return (
    <Row>
      <div className="d-flex flex-column vw-25">
        <Label withInput={true} className="ml-5">
          Regular
        </Label>
        <EditableInput placeholder="First Name" value={name} onChange={onChangeName} className="mr-5" />
      </div>
      <Column size={2}>
        <div className="d-flex ml-8 flex-column">
          <Label withInput={true} className="ml-5">
            Tiny
          </Label>
          <EditableInput placeholder="Add Weight" value={weight} onChange={onChangeWeight} size="tiny" />
        </div>
      </Column>
    </Row>
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
    <Row>
      <div className="d-flex flex-column vw-25">
        <Label withInput={true} className="ml-5">Regular</Label>
        <EditableInput
          placeholder="First Name"
          value={name}
          onChange={onChangeName}
          className="mr-5"
        />
      </div>
      <Column size={2}>
        <div className="d-flex ml-8 flex-column">
          <Label withInput={true} className="ml-5">Tiny</Label>
          <EditableInput
            placeholder="Add Weight"
            value={weight}
            onChange={onChangeWeight}
            size="tiny"
          />
        </div>
      </Column>
    </Row>
  );
}`;

export default {
  title: 'Components/Inline Editable Fields/EditableInput/Variants/Size',
  component: EditableInput,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
