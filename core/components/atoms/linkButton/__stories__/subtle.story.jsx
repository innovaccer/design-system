import * as React from 'react';
import { LinkButton } from '@/index';

// CSF format story
export const subtle = () => {
  const type = 'button';

  const icon = 'keyboard_arrow_down_round';

  const iconAlign = 'right';

  const children = 'more details';

  return (
    <LinkButton subtle={true} type={type} icon={icon} iconAlign={iconAlign} aria-label="Open">
      {children}
    </LinkButton>
  );
};

export default {
  title: 'Components/Button/LinkButton/Subtle',
  component: LinkButton,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` **aria-label:** Add \`aria-label='More Details'\` to describe the action of button `,
      },
    },
  },
};
