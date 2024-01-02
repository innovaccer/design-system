import * as React from 'react';
import Avatar from '../Avatar';
import { AvatarImage } from '../image';
import { AvatarIcon } from '../icon';

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
  title: 'Indicators/Avatar/With Image',
  component: Avatar,
  subcomponents: { 'Avatar.Image': AvatarImage, 'Avatar.Icon': AvatarIcon },
};
