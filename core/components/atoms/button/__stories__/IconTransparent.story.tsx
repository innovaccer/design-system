import * as React from 'react';
import Button from '../Button';

export const transparentIconButton = () => (
  <Button
    appearance="transparent"
    icon="more_horiz"
  />
);

export default {
  title: 'Components/Button/Transparent Icon Button',
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
