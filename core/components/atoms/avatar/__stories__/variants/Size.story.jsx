import * as React from 'react';
import { Avatar, Row, Column, Text } from '@/index';

// CSF format story
export const size = () => {
  return (
    <div>
      <Row>
        <Column>
          <Text weight="strong">Regular</Text>
          <div className="d-flex mt-7">
            <Avatar firstName="John" lastName="Doe" className="mr-8" />
            <Avatar appearance="accent4" firstName="John" lastName="Doe" shape="square" />
          </div>
        </Column>
        <Column>
          <Text weight="strong">Tiny</Text>
          <div className="d-flex mt-7">
            <Avatar firstName="John" lastName="Doe" size="tiny" className="mr-8" />
            <Avatar appearance="accent4" firstName="John" lastName="Doe" shape="square" size="tiny" />
          </div>
        </Column>
      </Row>
    </div>
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
