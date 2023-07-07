import * as React from 'react';
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

  const onToggle = () => {
    setOpen(!open);
  };

  const trigger = <Button appearance="basic">Open Popover</Button>;

  const options = {
    trigger,
    position,
    appendToBody,
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
      <div className="p-5">
        <Text>
          I am a popover, you can use me to display links,
          <br /> interactive elements, avatars, text formatting, meta data etc.
        </Text>
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
        trigger={<Button appearance="basic">Open Popover</Button>}
      >
        <div className='p-5'>
        <Text>
          I am a popover, you can use me to display links,<br/> 
          interactive elements, avatars, text formatting, meta data
          etc.
        </Text>
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
