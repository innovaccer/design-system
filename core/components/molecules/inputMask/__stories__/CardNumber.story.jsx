import * as React from 'react';
import InputMask from '../InputMask';
import Label from '@/components/atoms/label';
// CSF format story
export const cardNumber = () => {
  return (
    <div className="w-25">
      <Label className="mb-3" htmlFor="card-number-input">
        Card Number
      </Label>
      <InputMask
        id="card-number-input"
        mask={[
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          ' ',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
        placeholder="____ ____ ____ ____"
        name="card_number"
        icon="credit_card"
      />
    </div>
  );
};

export default {
  title: 'Components/Input/InputMask/Card Number',
  component: InputMask,
};
