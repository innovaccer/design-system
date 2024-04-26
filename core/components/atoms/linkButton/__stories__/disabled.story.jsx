import * as React from 'react';
import { LinkButton } from '@/index';

// CSF format story
export const disabled = () => {
  const icon = 'keyboard_arrow_down_round';
  const iconAlign = 'right';
  const children = 'more details';

  return (
    <LinkButton icon={icon} iconAlign={iconAlign} aria-label="More Details" disabled={true}>
      {children}
    </LinkButton>
  );
};

export default {
  title: 'Components/Button/LinkButton/Disabled',
  component: LinkButton,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` **aria-label:** Add \`aria-label='More Details'\` to describe the action of button `,
      },
    },
  },
};
