
import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Checkbox from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const disabled = () => {
  const label = text(
    'label',
    'Checkbox'
  );
  return (
    <div className="d-flex">
      <div className="mr-5">
        <Checkbox
          checked={true}
          disabled={true}
          label={label}
        />
        <br />
        <Text weight="strong">Checked</Text>
      </div>
      <div className="mr-5">
        <Checkbox
          checked={false}
          disabled={true}
          label={label}
        />
        <br />
        <Text weight="strong">Unchecked</Text>
      </div>
      <div className="mr-5">
        <Checkbox
          indeterminate={true}
          disabled={true}
          label={label}
        />
        <br />
        <Text weight="strong">Indeterminate</Text>
      </div>
    </div>

  );
};

export default {
  title: 'Components/Checkbox/Variants',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
