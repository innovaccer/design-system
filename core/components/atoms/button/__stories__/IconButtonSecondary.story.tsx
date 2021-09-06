import * as React from 'react';
import Button from '../Button';

export const iconButton = () => <Button appearance="basic" icon="keyboard_arrow_right" tooltip="Next in rank" />;

export default {
  title: 'Components/Button/Icon Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Secondary button with icon.',
      },
    },
  },
};
