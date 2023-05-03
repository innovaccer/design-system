import * as React from 'react';
import InputMask from '../InputMask';
import Label from '@/components/atoms/label';
import { Row } from '@/index';

// CSF format story
export const helpText = () => {
  return (
    <Row className="w-25 d-flex">
      <div>
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          icon="call"
          name="primary_phone"
          placeholder="(___) ___-____"
          helpText="Enter Your Phone number"
          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      </div>

      <div className="mt-8">
        <Label withInput={true}>Phone Number</Label>
        <InputMask
          icon="call"
          error={true}
          name="primary_phone"
          placeholder="(000) 0__-____"
          caption="Please Enter Correct Phone number"
          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        />
      </div>
    </Row>
  );
};

export default {
  title: 'Inputs/InputMask/Help Text',
  component: InputMask,
};
