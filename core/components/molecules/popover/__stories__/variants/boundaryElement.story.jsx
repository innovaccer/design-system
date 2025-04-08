import * as React from 'react';
import { action } from '@/utils/action';
import { Text, Button, Popover } from '@/index';
import '../style.css';

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

  const ref = React.useRef < React.HTMLDivElement > null;

  return (
    <div ref={ref.current} className="overflow-auto p-7 custom-boundaryWrapper">
      <Popover {...options} boundaryElement={ref.current}>
        <div className="m-6 pr-9">
          <Text>Popup</Text>
          <Button className="mt-4" appearance="primary" onClick={action('button clicked inside popover')}>
            Click
          </Button>
        </div>
      </Popover>
      <div className="pb-14" />
    </div>
  );
};

const customCode = `/*
// style.css
.custom-boundaryWrapper {
    height: var(--spacing-440);
    border: var(--border-width-2-5) dashed;
}

*/

() => {
  const ref = React.useRef(null);

  return(
    <div ref={ref} className="overflow-auto p-7 custom-boundaryWrapper">
      <Popover
        position="bottom-start"
        on="click"
        open={true}
        trigger={<Button appearance="basic">Open Popup</Button>}
        boundaryElement={ref}
        closeOnScroll={true}
      >
        <div className='m-6 pr-9'>
          <Text>Popup</Text>
          <Button appearance="primary" className="mt-4">Click</Button>
        </div>
      </Popover>
      <div className="pb-14" />
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
