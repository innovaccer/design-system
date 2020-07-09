import * as React from 'react';
import InputMask from '../InputMask';
import Label from '@/components/atoms/label';
// CSF format story
export const USPhoneNumber = () => {
  return (
    <div className="w-25">
      <Label className="mb-3">Work Phone</Label>
      <InputMask
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholder="(___) ___-____"
        name="primary_phone"
      />
    </div>
  );
};

export default {
  title: 'Molecules|InputMask',
  component: InputMask
};
