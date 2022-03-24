import * as React from 'react';
import { action } from '@/utils/action';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const all = () => {
  const [open, setOpen] = React.useState(false);
  const position = 'bottom';
  const on = 'hover';
  const appendToBody = true;
  const hoverable = true;
  const closeOnBackdropClick = true;
  const hideOnReferenceEscape = true;
  const dark = false;

  const onToggle = () => {
    setOpen(!open);
  };

  const trigger = <Button appearance="basic">Open Popup</Button>;

  const options = {
    trigger,
    position,
    appendToBody,
    dark,
    closeOnBackdropClick,
    hideOnReferenceEscape,
    on,
    hoverable,
    open,
    onToggle,
  };
  if (on === 'hover') delete options.onToggle;

  return (
    <Popover {...options}>
      <div style={{ width: 100 }} className="mx-6 my-6">
        <Text>Popup</Text>
        <Button className="mt-4" appearance="primary" onClick={action('button clicked inside popover')}>
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
        },
      },
    },
  },
};
