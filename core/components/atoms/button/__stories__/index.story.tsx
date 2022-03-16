import * as React from 'react';
import { action } from '@/utils/action';
import Button from '../Button';

// CSF format story
export const all = () => {
  const type = 'button';

  const appearance = 'basic';

  const size = 'large';

  const disabled = false;

  const expanded = false;

  const loading = false;

  const icon = '';

  const iconAlign = 'right';

  const children = 'Open';

  return (
    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
      type={type}
      appearance={appearance}
      size={size}
      expanded={expanded}
      disabled={disabled}
      loading={loading}
      icon={icon}
      iconAlign={iconAlign}
      aria-label="Open"
    >
      {children}
    </Button>
  );
};

export default {
  title: 'Components/Button/All',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Open'\` to describe the action of button 
         `,
      },
    },
  },
};
