import * as React from 'react';
import Button from '@/components/atoms/button';

export const labelButtonGroup = () => (
  <div className="d-flex">
    <Button
      appearance="basic"
      size="tiny"
      className="mr-2"
    >
      Copy
    </Button>
    <Button
      appearance="basic"
      size="tiny"
      className="mr-2"
    >
      Paste
    </Button>
    <Button
      appearance="basic"
      size="tiny"
    >
      Delete
    </Button>
  </div>
);

export default {
  title: 'Components/Button/Label Button Group',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'A pattern using buttons in a group.'
      }
    }
  }
};
