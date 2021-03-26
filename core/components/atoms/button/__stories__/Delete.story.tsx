import * as React from 'react';
import Button from '../Button';

export const deleteButton = () => (
  <Button
    appearance="alert"
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
  >
    Delete
  </Button>
);

export default {
  title: 'Components/Button/Delete Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
