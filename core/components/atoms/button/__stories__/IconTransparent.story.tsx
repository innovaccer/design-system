import * as React from 'react';
import Button from '../Button';

export const transparentIcon = () => (
  <Button
    appearance={'transparent'}
    size="regular"
    expanded={false}
    disabled={false}
    loading={false}
    icon="more_horiz"
  >
    {''}
  </Button>
);

export default {
  title: 'Components/Button/Transparent Icon',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Transparent button with icon.'
      }
    }
  }
};
