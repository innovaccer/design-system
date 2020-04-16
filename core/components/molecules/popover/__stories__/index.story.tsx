import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Popover from '../Popover';
import Button from '@/components/atoms/button';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';

// CSF format story
export const all = () => {
  const open = boolean(
    'open',
    false
  );

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

  const onToggle = () => {
    updateKnob('open', !open);
  };

  const trigger = <Button appearance="basic">Open Popup</Button>;

  const options = {
    trigger,
    position,
    appendToBody,
    dark,
    closeOnBackdropClick,
    on,
    hoverable,
    open,
    onToggle,
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

const customCode = `() => {
  const [open, setOpen] = React.useState(false);
  return(
    <Popover closeOnBackdropClick on="click" open={open} onToggle={function (open) { setOpen(open); }} position="bottom-start" style={{
        height: '100px',
        padding: '16px',
        width: '200px'
      }} trigger={<Button appearance="basic">Open Popup</Button>}
      >
      <p>
        Popup
      </p>
      <Button appearance="primary">
        Click
      </Button>
    </Popover>
  );
}`;

export default {
  title: 'Molecules|Popover',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
