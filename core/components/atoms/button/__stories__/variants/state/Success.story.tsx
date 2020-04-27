import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const success = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const children = text(
    'children',
    'Button'
  );

  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '40%',
  };

  const innerStyle = {
    marginRight: '5%',
  };

  return (
    <div style={style}>
      <div style={innerStyle}>
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'success'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div style={innerStyle}>
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'success'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div style={innerStyle}>
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'success'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
      <div style={innerStyle}>
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'success'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Loading with Text</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Button/Variants/State',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
