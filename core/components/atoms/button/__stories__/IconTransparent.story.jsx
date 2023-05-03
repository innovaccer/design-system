import * as React from 'react';
import Button from '../Button';

export const transparentIconButton = () => <Button appearance="transparent" icon="more_horiz" aria-label="Menu" />;

export default {
  title: 'Actions/Button/Transparent Icon Button',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Transparent button with icon.',
        a11yProps: ` **aria-label:** Add \`aria-label='Menu'\` to describe the action of button. `,
      },
    },
  },
};
