import * as React from 'react';
import { Avatar } from '@/index';

// CSF format story
export const withImage = () => {
  const appearance = 'secondary';
  const withTooltip = true;
  const firstName = 'Innovaccer';
  const lastName = 'logo';

  const options = {
    appearance,
    withTooltip,
    firstName,
    lastName,
  };

  return (
    <Avatar {...options}>
      <Avatar.Image src="https://design.innovaccer.com/images/withoutType.png" />
    </Avatar>
  );
};

export default {
  title: 'Components/Avatar/Avatar/With Image',
  component: Avatar,
  subcomponents: { 'Avatar.Image': Avatar.Image, 'Avatar.Icon': Avatar.Icon },
};
