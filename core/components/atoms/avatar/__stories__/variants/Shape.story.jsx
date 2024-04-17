import * as React from 'react';
import { Avatar } from '@/index';
import Text from '@/components/atoms/text';

// CSF format story
export const shape = () => {
  const weight = 'strong';

  return (
    <div className="d-flex">
      <div className="mr-9 d-flex flex-column">
        <Text weight={weight}>Round</Text> <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" />
      </div>
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Square</Text> <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" shape="square" />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Avatar/Avatar/Variants/Shape',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
