/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import Backdrop from '../Backdrop';
import { Button } from '@/index';

export const all = () => {
  const [open, setOpen] = React.useState(false);

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div onKeyDown={onKeyDown}>
      <Button onClick={() => setOpen(true)} appearance="primary">
        Trigger Backdrop
      </Button>
      <div onClick={() => setOpen(false)}>
        <Backdrop open={open} />
      </div>
    </div>
  );
};

const customCode = `() => {
  const [open, setOpen] = React.useState(false);

  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  return (
    <div onKeyDown={onKeyDown}>
      <Button onClick={() => setOpen(true)} appearance="primary">
        Trigger Backdrop
      </Button>
      <div onClick={() => setOpen(false)}>
        <Backdrop open={open} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Backdrop/All',
  component: Backdrop,
  parameters: {
    docs: {
      docPage: {
        customCode,
        noHtml: true,
      },
    },
  },
};
