import * as React from 'react';
import InputMask from '../InputMask';
import Label from '@/components/atoms/label';
import { Row } from '@/index';

// CSF format story
export const helpText = () => {
  const ref = React.useRef(null);
  const [error, setError] = React.useState(false);

  const onChangeHandler = () => {
    setError(ref.current?.value[1] === '0');
  };

  return (
    <Row className="w-25 d-flex">
      <div>
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          icon="call"
          name="primary_phone"
          placeholder="(___) ___-____"
          helpText="Enter your phone number"
          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      </div>

      <div className="mt-8">
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          ref={ref}
          icon="call"
          error={error}
          onChange={onChangeHandler}
          name="primary_phone"
          placeholder="(___) ___-____"
          helpText="Enter a phone number starting 0 to see the error mode"
          caption="Phone number cannot start with 0"
          mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      </div>
    </Row>
  );
};

const customCode = `() => {
  const ref = React.useRef(null);
  const [error, setError] = React.useState(false);

  const onChangeHandler = () => {
    setError(ref.current.value[1] === '0');
  };

  return (
    <Row className="w-25 d-flex">
      <div>
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          icon="call"
          name="primary_phone"
          placeholder="(___) ___-____"
          helpText="Enter your phone number"
          mask={['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
        />
      </div>

      <div className="mt-8">
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          ref={ref}
          icon="call"
          error={error}
          onChange={onChangeHandler}
          name="primary_phone"
          placeholder="(___) ___-____"
          helpText="Enter a phone number starting 0 to see the error mode"
          caption="Phone number cannot start with 0"
          mask={['(', /\\d/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]}
        />
      </div>
    </Row>
  );
};`;

export default {
  title: 'Components/Input/InputMask/Help Text',
  component: InputMask,
  parameters: {
    docs: {
      docPage: {
        title: 'InputMask',
        customCode,
      },
    },
  },
};
