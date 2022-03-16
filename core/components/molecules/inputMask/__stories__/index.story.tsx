import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { InputMask, Utils } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const inputType = select('type', ['text', 'password', 'number'], undefined);

  const value = text('value', '');
  const defaultValue = text('defaultValue', '');

  const size = select('size', ['tiny', 'regular', 'large'], undefined);

  const placeholder = text('placeholder', 'mm/dd/yyyy');

  const disabled = boolean('disabled', false);

  const icon = text('icon', '');

  const required = boolean('required', false);

  const inlineLabel = text('inlineLabel', '');

  const error = boolean('error', false);

  const caption = text('caption', '');

  const info = text('info', 'sample info tooltip');

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
