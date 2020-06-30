import * as React from 'react';
import Input from '../../../Input';
import { action } from '@storybook/addon-actions';
import Text from '@/components/atoms/text';
import Label from '@/components/atoms/label';
import Caption from '@/components/atoms/caption';

// CSF format story
export const withLabel = () => {

  const style = {
    display: 'flex',
    'flex-wrap': 'wrap',
  };

  const innerStyle = {
    maxWidth: '300px',
    marginRight: '5%',
    marginBottom: '20px',
  };

  return (
    <div style={style}>
      <div style={innerStyle}>
        <div style={{ height: '72px' }}>
          <Label withInput={true} required={true}>Full Name</Label>
          <Input
            name="input"
            value="Value"
            onChange={action('on-change')}
            onClear={action('on-clear')}
            required={true}
          />
        </div>
        <br />
        <Text weight="strong">No Caption</Text>
      </div>
      <div style={innerStyle}>
      <Label withInput={true} required={true}>Password</Label>
        <Input
          name="input"
          value="Value"
          type="password"
          onChange={action('on-change')}
          onClear={action('on-clear')}
          required={true}
        />
        <Caption withInput={true}>Pick a strong, unique password</Caption>
        <br />
        <Text weight="strong">Caption Default</Text>
      </div>
      <div style={innerStyle}>
      <Label withInput={true} required={true}>Password</Label>
        <Input
          name="input"
          value="Value"
          type="password"
          onChange={action('on-change')}
          onClear={action('on-clear')}
          required={true}
          error={true}
        />
        <Caption error={true} withInput={true}>Pick a strong, unique password</Caption>
        <br />
        <Text weight="strong">Caption Error</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Input/Variants/Types',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input'
      }
    }
  }
};
