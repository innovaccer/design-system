import * as React from 'react';
import InputMask from '../InputMask';
import Label from '@/components/atoms/label';
// CSF format story
export const phoneNumber = () => {
  return (
    <div className="w-25">
      <Label withInput={true}>Phone Number</Label>
      <InputMask
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholder="(___) ___-____"
        name="primary_phone"
        icon="call"
      />
    </div>
  );
};

export default {
  title: 'Components/InputMask/Phone Number',
  component: InputMask
};
