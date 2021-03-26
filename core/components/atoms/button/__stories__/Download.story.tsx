import * as React from 'react';
import Button from '../Button';

export const downloadButton = () => (
  <Button
    appearance="basic"
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
    icon="get_app"
    iconAlign="left"
  >
    Download
  </Button>
);

export default {
  title: 'Components/Button/Download Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
