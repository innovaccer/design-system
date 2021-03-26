import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const all = () => {
  const open = boolean(
    'open',
    false
  );

  const position = select(
    'position',
    ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'],
    'bottom'
  );

  const on = select(
    'on',
    ['click', 'hover'],
    'click'
  );

  const appendToBody = boolean('appendToBody', true);
  const hoverable = boolean('hoverable', true);
  const closeOnBackdropClick = boolean('closeOnBackdropClick', true);
  const hideOnReferenceEscape = boolean('hideOnReferenceEscape', true);
  const dark = boolean('dark', false);

  const onToggle = () => {
    updateKnob('open', !open);
  };

  const trigger = <Button appearance="basic">Open Popup</Button>;

  const options: Record<string, any> = {
    trigger,
    position,
    appendToBody,
    dark,
    closeOnBackdropClick,
    hideOnReferenceEscape,
    on,
    hoverable,
    open,
    onToggle
  };
  if (on === 'hover') delete options.onToggle;

  return (
    <Popover {...options}>
      <div style={{ width: 100 }} className="mx-6 my-6">
        <Text>Popup</Text>
        <Button
          className="mt-4"
          appearance="primary"
          onClick={action('button clicked inside popover')}
        >
          Click
        </Button>
      </div>
    </Popover>
  );
};

const customCode = `() => {
  return(
    <div className='mb-11'>
      <Popover
        position="bottom-start"
        on="click"
        trigger={<Button appearance="basic">Open Popup</Button>}
      >
        <div style={{ width: 100 }} className='mx-6 my-6'>
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">Click</Button>
        </div>
      </Popover>
    </div>
  );
}`;

export default {
  title: 'Components/Popover/All',
  component: Popover,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          exclude: ['offset'],
        }
      }
    }
  }
};
