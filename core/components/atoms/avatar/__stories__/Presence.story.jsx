import * as React from 'react';
import { Avatar, Row, Column, Text } from '@/index';

// CSF format story
export const presence = () => {
  const weight = 'strong';

  return (
    <Row className="w-50">
      <Column>
        <Text weight={weight}>Active</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" presence="active" />
      </Column>
      <Column>
        <Text weight={weight}>Away</Text>
        <br />
        <br />
        <Avatar firstName="John" lastName="Doe" presence="away" />
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Avatar/Avatar/Presence',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
