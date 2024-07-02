import * as React from 'react';
import { Avatar, Row, Column, Text } from '@/index';

// CSF format story
export const shape = () => {
  const weight = 'strong';

  return (
    <Row className="w-50">
      <Column>
        <Text weight={weight}>Round</Text>
        <br />
        <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" />
      </Column>
      <Column>
        <Text weight={weight}>Square</Text>
        <br />
        <br />
        <Avatar appearance="accent2" firstName="John" lastName="Doe" shape="square" />
      </Column>
    </Row>
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
