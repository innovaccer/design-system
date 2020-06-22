import * as React from 'react';
import InputMask from '../InputMask';

// CSF format story
export const USPhoneNumber = () => {
  return (
    <div
      style={{
        maxWidth: '300px'
      }}
    >
      <InputMask
        label="Work Phone"
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
