import * as React from 'react';
import { LinkButton, Flex } from '@/index';

// CSF format story
export const disabled = () => {
  const icon = 'keyboard_arrow_down_round';
  const iconAlign = 'right';
  const children = 'more details';

  return (
    <Flex gap="spacing-120">
      <LinkButton
        icon={icon}
        iconAlign={iconAlign}
        aria-label="More Details"
        disabled={true}
        tooltip="This link is currently unavailable"
      >
        {children}
      </LinkButton>

      <LinkButton
        icon={icon}
        iconAlign={iconAlign}
        aria-label="More Details"
        disabled={true}
        subtle={true}
        tooltip="This link is currently unavailable"
      >
        {children}
      </LinkButton>
    </Flex>
  );
};

export default {
  title: 'Components/Button/LinkButton/Disabled',
  component: LinkButton,
};
