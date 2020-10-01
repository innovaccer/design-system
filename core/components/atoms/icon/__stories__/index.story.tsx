import * as React from 'react';
import { select, number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Icon from '../index';

// CSF format story
export const all = () => {
  const appearance = select(
    'appearance',
    ['destructive', 'white', 'subtle', 'disabled', 'info', 'alert', 'warning', 'success'],
    undefined
  );

  const iconType = select(
    'type',
    ['filled', 'outlined', 'round', 'two-tone', 'sharp'],
    undefined
  );

  const size = number('size', 50);

  const name = text('Name', 'info');

  return (
    <div style={{ background: appearance === 'white' ? 'black' : 'transparent' }}>
      <Icon
        appearance={appearance}
        type={iconType}
        size={size}
        name={name}
        onClick={action('click-event')}
      />
    </div >
  );
};
const customCode = `() => {
  return(
    <Icon size={50} name='place'/>
    );
}`;

export default {
  title: 'Atoms|Icon',
  component: Icon,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
