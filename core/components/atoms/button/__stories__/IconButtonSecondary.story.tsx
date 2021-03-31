import * as React from 'react';
import Button from '../Button';

export const iconButtonSecondary = () => (
  <Button
    appearance="basic"
    size="regular"
    icon="navigate_next"
  />
);

export default {
  title: 'Components/Button/Icon Button Secondary',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Secondary button with icon.'
      }
    }
  }
};
