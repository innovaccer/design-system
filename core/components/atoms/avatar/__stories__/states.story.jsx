import * as React from 'react';
import { Avatar, Row, Column, Text } from '@/index';

export const states = () => {
  return (
    <Row>
      <Column className="d-flex align-items-center flex-column">
        <Avatar appearance="primary" firstName="John" lastName="Doe" />
        <Text appearance="subtle" className="mt-6">
          Default
        </Text>
      </Column>
      <Column className="d-flex align-items-center flex-column">
        <Avatar appearance="primary" firstName="John" lastName="Doe" disabled={true} tooltipSuffix="(Deactivated)" />
        <Text appearance="subtle" className="mt-6">
          Disabled
        </Text>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Avatar/Avatar/States',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar',
      },
    },
  },
};
