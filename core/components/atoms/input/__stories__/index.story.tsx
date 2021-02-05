import * as React from 'react';
import { select, text, boolean, number } from '@storybook/addon-knobs';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const inputType = select(
    'type',
    ['text', 'password', 'number', 'email', 'tel', 'url'],
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
    'Placeholder'
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const readOnly = boolean(
    'readOnly',
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

  const inlineLabel = text(
    'inlineLabel',
    ''
  );

  const error = boolean(
    'error',
    false
  );

  const info = text(
    'info',
    'sample info popover'
  );

  const pattern = text(
    'pattern',
    ''
  );

  const min = number(
    'min',
    1
  );

  const max = number(
    'max',
    30
  );

  const minLength = number(
    'minLength',
    1
  );

  const maxLength = number(
    'maxLength',
    30
  );

  return (
    <div className="w-25">
      <Input
        name="input"
        type={inputType}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        onChange={action('on-change')}
        onClick={action('on-click')}
        onClear={action('on-clear')}
        placeholder={placeholder}
        inlineLabel={inlineLabel}
        size={size}
        icon={icon}
        required={required}
        error={error}
        info={info}
        pattern={pattern}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

export default {
  title: 'Atoms|Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete']
        }
      }
    }
  }
};
