import * as React from 'react';
import { InputMask, Utils, Label } from '@/index';

export const all = () => {
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  return (
    <div className="w-25">
      <Label withInput={true} htmlFor="inputmask-date-a11y">
        Date
      </Label>
      <InputMask
        id="inputmask-date-a11y"
        icon="calendar_month"
        mask={dateMask}
        validators={dateValidator}
        placeholder="mm/dd/yyyy"
        aria-label="Date in mm/dd/yyyy format"
      />
    </div>
  );
};

const customCode = `() => {
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  return (
    <div className="w-25">
      <Label withInput={true} htmlFor="inputmask-date">Date</Label>
      <InputMask
        id="inputmask-date"
        icon="calendar_month"
        mask={dateMask}
        validators={dateValidator}
        placeholder="mm/dd/yyyy"
        aria-label="Date in mm/dd/yyyy format"
      />
    </div>
  );
}`;

export default {
  title: 'Components/Input/InputMask/All',
  component: InputMask,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
