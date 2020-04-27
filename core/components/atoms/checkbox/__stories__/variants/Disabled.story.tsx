
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

  const styles = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '2%',
  };

  return (
    <div style={styles}>
      <div style={innerStyle}>
        <Checkbox
          checked={true}
          disabled={true}
          label={label}
        />
        <br />
        <Text weight="strong">Checked</Text>
      </div>
      <div style={innerStyle}>
        <Checkbox
          checked={false}
          disabled={true}
          label={label}
        />
        <br />
        <Text weight="strong">Unchecked</Text>
      </div>
      <div style={innerStyle}>
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
  title: 'Atoms|Checkbox/Variants',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
