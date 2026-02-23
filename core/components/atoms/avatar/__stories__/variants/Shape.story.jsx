import * as React from 'react';
import { Avatar, Row, Column, Text, Button } from '@/index';

// CSF format story
export const shape = () => {
  return (
    <div>
      <Row className="w-50">
        <Column>
          <Text weight="strong">Round</Text>
          <br />
          <br />
          <Avatar appearance="accent2" firstName="John" lastName="Doe" />
        </Column>
        <Column>
          <Text weight="strong">Square</Text>
          <br />
          <br />
          <Avatar appearance="accent2" firstName="John" lastName="Doe" shape="square" />
        </Column>
      </Row>
      <Button className="w-100">test</Button>
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
