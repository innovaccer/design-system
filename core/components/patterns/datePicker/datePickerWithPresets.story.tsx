import * as React from 'react';
import { DatePicker } from '@/index';

export const WithPresets = () => <></>;

const sandbox = (
  <iframe
    src="https://codesandbox.io/embed/bold-rosalind-q68jqz?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="bold-rosalind-q68jqz"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  />
);

export default {
  title: 'Patterns/DatePicker/With Presets',
  component: DatePicker,
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
        title: 'DatePicker',
      },
    },
  },
};
