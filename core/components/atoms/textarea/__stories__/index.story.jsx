import * as React from 'react';
import { Textarea } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const value = '';

  const placeholder = 'Placeholder';

  const disabled = false;

  const error = false;

  const resize = true;

  const rows = 3;

  return (
    <div className="w-25">
      <Textarea
        name="Textarea"
        value={value}
        disabled={disabled}
        onChange={action('on-change')}
        onClick={action('on-click')}
        placeholder={placeholder}
        error={error}
        resize={resize}
        rows={rows}
        aria-labelledby="Textarea"
      />
    </div>
  );
};

export default {
  title: 'Components/Inputs/Textarea/All',
  component: Textarea,
};
