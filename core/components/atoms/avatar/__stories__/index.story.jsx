import * as React from 'react';
import Avatar from '../Avatar';

// CSF format story
export const all = () => {
  const appearance = 'primary';
  const size = 'tiny';
  const withTooltip = true;
  const children = '';
  const firstName = 'John';
  const lastName = 'Doe';

  const options = {
    appearance,
    withTooltip,
    size,
    firstName,
    lastName,
  };

  return <Avatar {...options}>{children}</Avatar>;
};

const codesandbox = (
  <iframe
    src="https://codesandbox.io/embed/upbeat-bush-gxn8ip?expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="upbeat-bush-gxn8ip"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
);

export default {
  title: 'Components/Avatar/All',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        codesandbox: codesandbox,
      },
    },
  },
};
