import * as React from 'react';
import { InputMask, Utils } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const inputType = 'number';

  const value = '';
  const defaultValue = '';

  const size = 'large';

  const placeholder = 'mm/dd/yyyy';

  const disabled = false;

  const icon = '';

  const required = false;

  const inlineLabel = '';

  const error = false;

  const caption = '';

  const info = 'sample info tooltip';

  const inputValidator = (val) => {
    return Utils.validators.date(val, 'mm/dd/yyyy');
  };

  return (
    <div className="w-25">
      <InputMask
        name="input"
        type={inputType}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={action('on-change')}
        onClick={action('on-click')}
        onBlur={action('on-blur')}
        onClear={action('on-clear')}
        placeholder={placeholder}
        inlineLabel={inlineLabel}
        size={size}
        icon={icon}
        required={required}
        error={error}
        caption={caption}
        info={info}
        mask={Utils.masks.date['mm/dd/yyyy']}
        validators={inputValidator}
      />
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
        mask={dateMask}
        validators={dateValidator}
      />
    </div>
  );
};
`;

export default {
  title: 'Components/InputMask/All',
  component: InputMask,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
