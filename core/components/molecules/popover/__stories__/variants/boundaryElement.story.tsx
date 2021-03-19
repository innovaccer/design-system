import * as React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { updateKnob } from '@/utils/storybookEventEmitter';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const boundaryElement = () => {
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
  const closeOnScroll = boolean('closeOnScroll', true);
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
    closeOnScroll,
    hideOnReferenceEscape,
    on,
    hoverable,
    open,
    onToggle
  };
  if (on === 'hover') delete options.onToggle;

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} style={{ height: 150, border: '1px dashed', padding: 20, overflow: 'auto' }}>
      <Popover {...options} boundaryElement={ref}>
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
      <div style={{ height: 300 }} />
    </div>
  );
};

const customCode = `() => {
  const ref = React.useRef(null);

  return(
    <div ref={ref} style={{ height: 150, padding: 20, border: '1px dashed', overflow: 'auto'}}>
      <Popover
        position="bottom-start"
        on="click"
        open={true}
        trigger={<Button appearance="basic">Open Popup</Button>}
        boundaryElement={ref}
        closeOnScroll={true}
      >
        <div style={{ width: 100 }} className='mx-6 my-6'>
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">Click</Button>
        </div>
      </Popover>
      <div style={{height: 300}} />
    </div>
  );
}`;

export default {
  title: 'Components/Popover/Variants',
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
