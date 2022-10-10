import * as React from 'react';
import Backdrop from '../Backdrop';
import { Paragraph } from '@/index';

export const all = () => {
  const open = false;

  const options = {
    open,
  };

  return (
    <div>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
        <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        <br />
      </Paragraph>
      <Backdrop {...options} />
    </div>
  );
};

export default {
  title: 'Components/Backdrop/All',
  component: Backdrop,
  parameters: {
    docs: {
      docPage: {
        noHtml: true,
      },
    },
  },
};
