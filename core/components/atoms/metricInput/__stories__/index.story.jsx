import * as React from 'react';
import { MetricInput } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const size = 'regular';

  const placeholder = 'Placeholder';

  const disabled = false;

  const readOnly = false;

  const icon = '';

  const prefix = '';

  const suffix = '';

  const error = false;

  return (
    <div className="w-25">
      <MetricInput
        name="input"
        disabled={disabled}
        readOnly={readOnly}
        onChange={action('on-change')}
        onClick={action('on-click')}
        placeholder={placeholder}
        aria-label="Metric input example"
        prefix={prefix}
        suffix={suffix}
        size={size}
        icon={icon}
        error={error}
      />
    </div>
  );
};

export default {
  title: 'Components/Input/MetricInput/All',
  component: MetricInput,
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
