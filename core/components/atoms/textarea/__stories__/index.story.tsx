import * as React from 'react';
import { text, boolean, number } from '@storybook/addon-knobs';
import TextArea from '../TextArea';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const value = text(
    'value',
    ''
  );

  const placeholder = text(
    'placeholder',
    'Placeholder'
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const error = boolean(
    'error',
    false
  );

  const rows = number('rows', 3);

  return (
    <div style={{ maxWidth: '300px' }}>
      <TextArea
        name="TextArea"
        value={value}
        disabled={disabled}
        onChange={action('on-change')}
        onClick={action('on-click')}
        placeholder={placeholder}
        error={error}
        rows={rows}
      />
    </div>
  );
};

export default {
  title: 'Atoms|TextArea',
  component: TextArea,
};
