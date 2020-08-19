import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import InputMask from '../InputMask';
import masks from '../masks';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const inputType = select(
    'type',
    ['text', 'password', 'number'],
    undefined
  );

  const value = text(
    'value',
    ''
  );

  const size = select(
    'size',
    ['tiny', 'regular', 'large'],
    undefined
  );

  const placeholder = text(
    'placeholder',
    'mm/dd/yyyy'
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const icon = text(
    'icon',
    ''
  );

  const required = boolean(
    'required',
    false
  );

  // const label = text(
  //   'label',
  //   ''
  // );

  const inlineLabel = text(
    'inlineLabel',
    ''
  );

  const error = boolean(
    'error',
    false
  );

  const caption = text(
    'caption',
    ''
  );

  const info = text(
    'info',
    'sample info tooltip'
  );

  return (
    <div className="w-25">
      <InputMask
        name="input"
        type={inputType}
        defaultValue={value}
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
        mask={masks.date['mm/dd/yyyy']}
      />
    </div>
  );
};

export default {
  title: 'Molecules|InputMask',
  component: InputMask
};
