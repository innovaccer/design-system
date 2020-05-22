import * as React from 'react';
import Input from '../Input';
import { action } from '@storybook/addon-actions';

export const searchInput = () => {

  const icon = 'search';

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
        <Input
          name="input"
          value="Value"
          onChange={action('on-change')}
          clearButton={true}
          icon={icon}
        />
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input'
      }
    }
  }
};
