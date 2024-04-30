import * as React from 'react';
import { InputMask, Utils } from '@/index';

export const all = () => {
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  return (
    <div className="w-25">
      <InputMask icon="calendar_month" mask={dateMask} validators={dateValidator} placeholder="mm/dd/yyyy" />
    </div>
  );
};

const customCode = `// import { Utils } from '@innovaccer/design-system';

() => {
  const dateMask = Utils.masks.date['mm/dd/yyyy'];
  const dateValidator = (val) => Utils.validators.date(val, 'mm/dd/yyyy');

  return (
    <div className="w-25">
      <InputMask
        icon="calendar_month"
        mask={dateMask}
        validators={dateValidator}
        placeholder="mm/dd/yyyy"
      />
    </div>
  );
};
`;

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
