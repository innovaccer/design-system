import * as React from 'react';
import Input from '../../Input';
import { action } from '@storybook/addon-actions';
import Text from '@/components/atoms/text';

// CSF format story
export const iconLeft = () => {

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
          onChangeHandler={action('on-change')}
          clearButton={true}
          icon={icon}
        />
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div style={innerStyle}>
        <Input
          name="input"
          value=""
          placeholder="Placeholder"
          onChangeHandler={action('on-change')}
          clearButton={true}
          info="sample info tooltip"
          icon={icon}
        />
        <br />
        <Text weight="strong">Placeholder</Text>
      </div>
      <div style={innerStyle}>
        <Input
          name="input"
          value="Value"
          onChangeHandler={action('on-change')}
          clearButton={true}
          error={true}
          icon={icon}
        />
        <br />
        <Text weight="strong">Error</Text>
      </div>
      <div style={innerStyle}>
        <Input
          name="input"
          value="Value"
          onChangeHandler={action('on-change')}
          disabled={true}
          icon={icon}
        />
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div style={innerStyle}>
        <Input
          name="input"
          value="Value"
          icon={icon}
        />
        <br />
        <Text weight="strong">Read Only</Text>
      </div>
    </div>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Input/Types' };
