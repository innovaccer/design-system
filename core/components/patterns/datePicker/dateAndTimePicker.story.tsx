import * as React from 'react';

export const dateAndTimePicker = () => <></>;

const sandbox = (
  <iframe
    src="https://codesandbox.io/embed/angry-tdd-97ghqj?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: '500px', border: '4px', borderRadius: '4px', overflow: 'hidden' }}
    title="angry-tdd-97ghqj"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
);

export default {
  title: 'Patterns/DatePicker/Date And Time Picker',
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    docs: {
      docPage: {
        noProps: true,
        noStory: true,
        embedSandbox: sandbox,
        title: 'Date and time picker',
      },
    },
  },
};
