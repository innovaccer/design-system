import * as React from 'react';
import { Avatar } from '@/index';

// CSF format story
export const withSuffix = () => {
  const withTooltip = true;
  const firstName = 'John';
  const lastName = 'Doe';
  const tooltipSuffix = '(Deactivated)';
  const disabled = true;

  const options = {
    withTooltip,
    firstName,
    lastName,
    disabled,
    tooltipSuffix,
  };

  return <Avatar {...options} />;
};

export default {
  title: 'Components/Avatar/Avatar/With Suffix',
  component: Avatar,
};
