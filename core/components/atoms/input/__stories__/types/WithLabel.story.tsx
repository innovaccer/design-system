import * as React from 'react';
import Input from '../../Input';
import { action } from '@storybook/addon-actions';
import Text from '@/components/atoms/text';

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
          <Input
            name="input"
            value="Value"
            onChange={action('on-change')}
            clearButton={true}
            label="Full Name"
            required={true}
          />
        </div>
        <br />
        <Text weight="strong">No Caption</Text>
      </div>
      <div style={innerStyle}>
        <Input
          name="input"
          value="Value"
          type="password"
          onChange={action('on-change')}
          clearButton={true}
          label="Password"
          required={true}
          caption={'Pick a strong, unique password'}
        />
        <br />
        <Text weight="strong">Caption Default</Text>
      </div>
      <div style={innerStyle}>
        <Input
          name="input"
          value="Value"
          type="password"
          onChange={action('on-change')}
          clearButton={true}
          label="Password"
          required={true}
          caption={'This is an error message'}
          error={true}
        />
        <br />
        <Text weight="strong">Caption Error</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Input/Types',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input'
      }
    }
  }
};
