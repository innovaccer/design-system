import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
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

  return (
    <div style={{ maxWidth: '300px' }}>
      <Input
        name="input"
        type={inputType}
        value={value}
        disabled={disabled}
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
      />
    </div>
  );
};

export default {
  title: 'Atoms|Input',
  component: Input,
};
