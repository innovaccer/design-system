import * as React from 'react';
import Button from '../Button';

export const iconLeftSecondary = () => (
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
  title: 'Components/Button/Icon Left Secondary',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Secondary button with left aligned icon.'
      }
    }
  }
};
