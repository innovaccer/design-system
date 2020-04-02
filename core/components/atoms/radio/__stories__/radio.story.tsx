import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Radio from '../index';
import { docPage } from '@/utils/docPage';

// CSF format story
export const radio = () => {

  const size = select(
    'size',
    ['tiny', 'regular'],
    undefined
  );

  const label = text(
    'label',
    'Radio'
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const name = 'gender';

  return (
    <div>
      <Radio
        disabled={disabled}
        size={size}
        label={label}
        name={name}
        value={label}
      />
    </div>
  );
};

export default {
  title: 'Atoms|Radio',
  component: Radio,
  parameters: {
    docs: {
      page: () => docPage({ props: { exclude: ['key'] } })
    }
  }
};
