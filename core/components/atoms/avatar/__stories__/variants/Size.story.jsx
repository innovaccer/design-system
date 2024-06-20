import * as React from 'react';
import { Avatar, Row, Text, Column } from '@/index';

// CSF format story
export const size = () => {
  const weight = 'strong';

  return (
    <Row className="w-50">
      <Column>
        <Text weight={weight}>Regular</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" />
      </Column>
      <Column>
        <Text weight={weight}>Tiny</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" size="tiny" />
      </Column>
      <Column>
        <Text weight={weight}>Regular</Text>
        <br />
        <br />
        <Avatar appearance="accent4" firstName="John" lastName="Doe" shape="square" />
      </Column>
      <Column>
        <Text weight={weight}>Tiny</Text>
        <br />
        <br />
        <Avatar appearance="accent4" firstName="John" lastName="Doe" size="tiny" shape="square" />
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Avatar/Avatar/Variants/Size',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
