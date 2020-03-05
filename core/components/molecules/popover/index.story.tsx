import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Popover from './Popover';
import Button from '@/components/atoms/button';
import { action } from '@storybook/addon-actions';

// CSF format story
export const all = () => {
  const position = select(
    'position',
    ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'],
    'bottom-start'
  );
  const on = select(
    'on',
    ['click', 'hover'],
    'click'
  );
  const appendToBody = boolean('appendToBody', false);
  const hoverable = boolean('hoverable', false);
  const closeOnBackdropClick = boolean('closeOnBackdropClick', true);
  const dark = boolean('dark', false);

  const trigger = <Button appearance="basic">Open Popup</Button>;

  const options = {
    trigger,
    position,
    appendToBody,
    dark,
    closeOnBackdropClick,
    on,
    hoverable,
    style: {
      height: '100px',
      width: '200px',
      padding: '16px'
    }
  };

  return (
    <Popover {...options}>
      <p>Popup</p>
      <Button appearance="primary" onClick={action('button clicked inside popover')}>Click</Button>
    </Popover>
  );
};

export default { title: 'Popover' };
