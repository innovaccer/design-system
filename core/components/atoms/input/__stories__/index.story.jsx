import * as React from 'react';
import Input from '../Input';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const inputType = 'url';

  const value = '';

  const size = 'large';

  const placeholder = 'Placeholder';

  const disabled = false;

  const readOnly = false;

  const icon = '';

  const required = false;

  const inlineLabel = '';

  const error = false;

  const info = 'sample info popover';

  const pattern = '';

  const min = 1;

  const max = 30;

  const minLength = 1;

  const maxLength = 30;

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
  title: 'Inputs/Input/All',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input',
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
