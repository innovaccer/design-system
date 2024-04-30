import * as React from 'react';
import { Textarea } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const placeholder = 'Placeholder';

  const resize = true;

  const rows = 3;

  return (
    <div className="w-25">
      <Textarea
        name="Textarea"
        onChange={action('on-change')}
        onClick={action('on-click')}
        placeholder={placeholder}
        resize={resize}
        rows={rows}
        aria-labelledby="Textarea"
      />
    </div>
  );
};

export default {
  title: 'Components/Input/Textarea/All',
  component: Textarea,
};
