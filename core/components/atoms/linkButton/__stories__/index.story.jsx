import * as React from 'react';
import { action } from '@/utils/action';
import { LinkButton } from '@/index';

// CSF format story
export const all = () => {
  const type = 'button';

  const icon = 'keyboard_arrow_down_round';

  const iconAlign = 'right';

  const children = 'more details';

  return (
    <LinkButton type={type} icon={icon} iconAlign={iconAlign} aria-label="Open" onClick={action('button-clicked')}>
      {children}
    </LinkButton>
  );
};

export default {
  title: 'Components/Button/LinkButton/All',
  component: LinkButton,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` **aria-label:** Add \`aria-label='More Details'\` to describe the action of button `,
      },
    },
  },
};
