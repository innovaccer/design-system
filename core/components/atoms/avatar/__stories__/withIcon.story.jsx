import * as React from 'react';
import { Avatar } from '@/index';

// CSF format story
export const withIcon = () => {
  const appearance = 'primary';
  const withTooltip = true;
  const firstName = 'Innovaccer';
  const lastName = 'Bot';

  const options = {
    appearance,
    withTooltip,
    firstName,
    lastName,
  };

  return (
    <Avatar {...options} shape="square">
      <Avatar.Icon name="smart_toy" />
    </Avatar>
  );
};

export default {
  title: 'Components/Avatar/Avatar/With Icon',
  component: Avatar,
  subcomponents: { 'Avatar.Image': Avatar.Image, 'Avatar.Icon': Avatar.Icon },
};
