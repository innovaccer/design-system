import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { MetricInput } from '@/index';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const size = select('size', ['regular', 'large'], undefined);

  const placeholder = text('placeholder', 'Placeholder');

  const disabled = boolean('disabled', false);

  const readOnly = boolean('readOnly', false);

  const icon = text('icon', '');

  const prefix = text('prefix', '');

  const suffix = text('suffix', '');

  const error = boolean('error', false);

  return (
    <div style={{ width: 'var(--spacing-8)' }}>
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
  title: 'Components/MetricInput/All',
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
