import * as React from 'react';
import { action } from '@/utils/action';
import { Text, Button, Popover } from '@/index';

// CSF format story
export const boundaryElement = () => {
  const [open, setOpen] = React.useState(false);
  const position = 'bottom';
  const on = 'hover';
  const appendToBody = true;
  const hoverable = true;
  const closeOnBackdropClick = true;
  const closeOnScroll = true;
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
    closeOnScroll,
    hideOnReferenceEscape,
    on,
    hoverable,
    open,
    onToggle,
  };
  if (on === 'hover') delete options.onToggle;

  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={ref.current} style={{ height: 150, border: '1px dashed', padding: 20, overflow: 'auto' }}>
      <Popover {...options} boundaryElement={ref.current}>
        <div style={{ width: 100 }} className="mx-6 my-6">
          <Text>Popup</Text>
          <Button className="mt-4" appearance="primary" onClick={action('button clicked inside popover')}>
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
  title: 'Components/Popover/Variants/Boundary Element',
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
